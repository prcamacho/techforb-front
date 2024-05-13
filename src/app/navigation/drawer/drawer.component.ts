import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardLayoutComponent } from '../../dashboard/layout/dashboard-layout/dashboard-layout.component';
import { AuthService } from '../../auth/services/auth-service.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule,DashboardLayoutComponent,MatButtonModule,],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
