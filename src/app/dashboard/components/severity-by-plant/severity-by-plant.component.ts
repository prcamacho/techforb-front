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
export class SeverityByPclantComponent {
  constructor(private dialog: MatDialog) {}

  createPlant() {
    const dialogRef = this.dialog.open(PopupNewPlantComponent, {
      maxWidth: '400px',
      width: '400px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }

  editPlant(plant: any) {
    const dialogRef = this.dialog.open(PopupEditPlantComponent, {
      maxWidth: '600%',
      width: '600px',
      height: 'auto',
      data: plant,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }

  displayedColumns: string[] = [
    'pais',
    'nombre_de_la_planta',
    'lecturas',
    'alertas_medias',
    'alertas_rojas',
    'acciones',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
