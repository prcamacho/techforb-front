import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PlantServiceService } from './../../services/plant-service.service';
import { SeveritiesByTypeResponse } from '../../interfaces/severities-by-type-response.interface';

@Component({
  selector: 'app-severiy-by-type-lecture',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './severiy-by-type-lecture.component.html',
  styleUrl: './severiy-by-type-lecture.component.css',
})
export class SeveriyByTypeLectureComponent implements OnInit {
  tempAlerts: SeveritiesByTypeResponse = {};
  windAlerts: SeveritiesByTypeResponse = {};
  levelsAlerts: SeveritiesByTypeResponse = {};
  pressureAlerts: SeveritiesByTypeResponse = {};
  tensionAlerts: SeveritiesByTypeResponse = {};
  otherAlerts: SeveritiesByTypeResponse = {};
  monoxAlerts: SeveritiesByTypeResponse = {};
  energyAlerts: SeveritiesByTypeResponse = {};

  constructor(private plantService: PlantServiceService) {}

  ngOnInit(): void {
    this.plantService
      .getSeveritiesByType('viento')
      .subscribe((data: SeveritiesByTypeResponse) => {
        this.tempAlerts = data;
      });
    this.plantService
      .getSeveritiesByType('temperatura')
      .subscribe((data: SeveritiesByTypeResponse) => {
        this.windAlerts = data;
      });
    this.plantService
      .getSeveritiesByType('niveles')
      .subscribe((data: SeveritiesByTypeResponse) => {
        this.levelsAlerts = data;
      });
    this.plantService
      .getSeveritiesByType('presion')
      .subscribe((data: SeveritiesByTypeResponse) => {
        this.pressureAlerts = data;
      });
    this.plantService
      .getSeveritiesByType('tension')
      .subscribe((data: SeveritiesByTypeResponse) => {
        this.tensionAlerts = data;
      });
    this.plantService
      .getSeveritiesByType('otros gases')
      .subscribe((data: SeveritiesByTypeResponse) => {
        this.otherAlerts = data;
      });
    this.plantService
      .getSeveritiesByType('monoxido de carbono')
      .subscribe((data: SeveritiesByTypeResponse) => {
        this.monoxAlerts = data;
      });
    this.plantService
      .getSeveritiesByType('energia')
      .subscribe((data: SeveritiesByTypeResponse) => {
        this.energyAlerts = data;
      });
  }
}
