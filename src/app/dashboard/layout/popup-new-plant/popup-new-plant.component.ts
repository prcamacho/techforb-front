import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-popup-new-plant',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, MatSelectModule],
  templateUrl: './popup-new-plant.component.html',
  styleUrl: './popup-new-plant.component.css'
})
export class PopupNewPlantComponent {
  constructor(public dialogRef: MatDialogRef<PopupNewPlantComponent>){}


  onClose(){
    this.dialogRef.close();
  }
}
