import { NewPlant } from './../../interfaces/newPlant.interface';
import { PlantServiceService } from './../../services/plant-service.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CountryServiceService } from '../../services/country-service.service';
import { CountryRegionResponse } from '../../interfaces/country-region-response.interface';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup-new-plant',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './popup-new-plant.component.html',
  styleUrl: './popup-new-plant.component.css',
})
export class PopupNewPlantComponent implements OnInit {
  countries: CountryRegionResponse[] = [];
  newPlantForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopupNewPlantComponent>,
    private countryService: CountryServiceService,
    private plantService: PlantServiceService
  ) {
    this.newPlantForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.countryService
      .getCountryByRegion()
      .subscribe((data: CountryRegionResponse[]) => {
        this.countries = data;
      });
  }

  createNewPlant() {
    const { name, country } = this.newPlantForm.value;
  
    this.plantService.addPlant({ name, country }).subscribe({
      next: (response) => {
        Swal.fire('Éxito', 'La planta se ha creado correctamente', 'success');
        setTimeout(() => {
          this.dialogRef.close();
        }, 500);
      },
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
  

  onClose() {
    this.dialogRef.close();
  }
}
