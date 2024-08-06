import { CountBySeverity } from './../../interfaces/count-by-severity-response.interface';
import { PlantServiceService } from './../../services/plant-service.service';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-severity-lectures',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './severity-lectures.component.html',
  styleUrl: './severity-lectures.component.css',
})
export class SeverityLecturesComponent implements OnInit {
  okAlerts: number = 0;
  mediumAlerts: number = 0;
  redAlerts: number = 0;

  constructor(private plantService: PlantServiceService) {}

  ngOnInit(): void {
    this.plantService
      .getCountBySeverity('ok')
      .subscribe((data: any) => {
        this.okAlerts = data.length;
      });

    this.plantService
      .getCountBySeverity('media')
      .subscribe((data: any) => {
        this.mediumAlerts = data.length;
      });

    this.plantService
      .getCountBySeverity('roja')
      .subscribe((data: any) => {
        this.redAlerts = data.length;
      });
  }
}
