import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-popup-edit-plant',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './popup-edit-plant.component.html',
  styleUrl: './popup-edit-plant.component.css'
})
export class PopupEditPlantComponent {
  constructor(public dialogRef: MatDialogRef<PopupEditPlantComponent>){}


  onClose(){
    this.dialogRef.close();
  }

}