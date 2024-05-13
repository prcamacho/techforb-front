import { Component } from '@angular/core';
import { NavBarComponent } from '../../../navigation/nav-bar/nav-bar.component';

@Component({
  selector: 'app-dashboard-main-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './dashboard-main-page.component.html',
  styleUrl: './dashboard-main-page.component.css'
})
export class DashboardMainPageComponent {

}
