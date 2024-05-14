import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NewPlant } from '../../interfaces/newPlant.interface';
import { AddAlerts, AlertSeverity } from '../../interfaces/addAlerts.interface';
import { PlantServiceService } from '../../services/plant-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup-edit-plant',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './popup-edit-plant.component.html',
  styleUrl: './popup-edit-plant.component.css',
})
export class PopupEditPlantComponent {
  newAlertsForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<PopupEditPlantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewPlant,
    private plantService: PlantServiceService
  ) {
    this.newAlertsForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      country: new FormControl(this.data.country, [Validators.required]),
      okAlerts: new FormControl('0', [Validators.required]),
      mediumAlerts: new FormControl('0', [Validators.required]),
      redAlerts: new FormControl('0', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.newAlertsForm.valid) {
      const formValues = this.newAlertsForm.value;
      const alertSeverities: AlertSeverity[] = [
        { severity: 'ok', count: formValues.okAlerts },
        { severity: 'media', count: formValues.mediumAlerts },
        { severity: 'roja', count: formValues.redAlerts },
      ];
      const addAlerts: AddAlerts = {
        name: formValues.name,
        country: formValues.country,
        alertSeverities: alertSeverities,
      };
      this.plantService.addAlerts(addAlerts).subscribe({
        next: (response) => {
          Swal.fire(
            'Éxito',
            'La planta se ha editado correctamente',
            'success'
          );
          setTimeout(() => {
            this.dialogRef.close();
          }, 500);
        },
        error: (message) => {
          Swal.fire('Error', message, 'error');
        },
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
