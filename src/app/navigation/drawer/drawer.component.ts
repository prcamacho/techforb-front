import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardLayoutComponent } from '../../dashboard/layout/dashboard-layout/dashboard-layout.component';


@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule,DashboardLayoutComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {

}
