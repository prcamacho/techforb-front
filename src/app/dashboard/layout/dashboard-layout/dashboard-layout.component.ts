import { Component, computed, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth-service.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PopupNewPlantComponent } from '../popup-new-plant/popup-new-plant.component';
import { MatButtonModule } from '@angular/material/button';
import { PopupEditPlantComponent } from '../popup-edit-plant/popup-edit-plant.component';
import { SeverityLecturesComponent } from '../../components/severity-lectures/severity-lectures.component';
import { SeveriyByTypeLectureComponent } from '../../components/severiy-by-type-lecture/severiy-by-type-lecture.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    SeverityLecturesComponent,
    SeveriyByTypeLectureComponent
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  public user = computed(() => this.authService.currentUser());

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

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
