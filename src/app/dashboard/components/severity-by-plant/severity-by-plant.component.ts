import { MatIconModule } from '@angular/material/icon';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PopupNewPlantComponent } from '../../layout/popup-new-plant/popup-new-plant.component';
import { PopupEditPlantComponent } from '../../layout/popup-edit-plant/popup-edit-plant.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AllAlertsResponse, SeverityCounts } from '../../interfaces/allAlerts-response.interface';
import { PlantServiceService } from '../../services/plant-service.service';
import { CountryServiceService } from '../../services/country-service.service';
import { CountryRegionResponse } from '../../interfaces/country-region-response.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // Agrega más elementos aquí
];

@Component({
  selector: 'app-severity-by-plant',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './severity-by-plant.component.html',
  styleUrl: './severity-by-plant.component.css',
})
export class SeverityByPclantComponent implements OnInit{
  countries: CountryRegionResponse[] = [];
  displayedColumns: string[] = [
    'pais',
    'nombre_de_la_planta',
    'lecturas',
    'alertas_medias',
    'alertas_rojas',
    'acciones',
  ];
  dataSource: MatTableDataSource<AllAlertsResponse> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog,private plantService: PlantServiceService,private countryService: CountryServiceService) {}

  ngOnInit() {
    this.plantService.getAllAlerts().subscribe((data: AllAlertsResponse[]) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.countryService.getCountryByRegion().subscribe((data: CountryRegionResponse[]) => {
      this.countries = data;
    });
  }

  getFlag(countryName: string): string {
    const country = this.countries.find(c => c.name.common === countryName);
    return country ? country.flags.png : '';
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createPlant() {
    const dialogRef = this.dialog.open(PopupNewPlantComponent, {
      maxWidth: '400px',
      width: '400px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
    this.plantService.getAllAlerts().subscribe((data: AllAlertsResponse[]) => {
      this.dataSource.data = data;
    });
  
  }

  editPlant(plant: any) {
    const dialogRef = this.dialog.open(PopupEditPlantComponent, {
      maxWidth: '600%',
      width: '600px',
      height: 'auto',
      data: {
        name: plant.name,
        country: plant.country
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }
}

