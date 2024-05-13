import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeveritiesByTypeResponse } from '../interfaces/severities-by-type-response.interface';
import {
  NewPlant,
  NewPlantResponse,
} from '../interfaces/new-plant-response.interface';
import { AddAlerts } from '../interfaces/addAlerts.interface';
import { AddAlertsResponse } from '../interfaces/addAlerts-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PlantServiceService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getSeveritiesByType(id: string): Observable<SeveritiesByTypeResponse> {
    return this.http.get<SeveritiesByTypeResponse>(
      `${this.baseUrl}/alerts/${id}`
    );
  }

  addPlant(newPlant: NewPlant): Observable<NewPlantResponse> {
    return this.http.post<NewPlantResponse>(`${this.baseUrl}/plants`, newPlant);
  }

  addAlerts(alertsToAdd: AddAlerts): Observable<AddAlertsResponse> {
    return this.http.post<AddAlertsResponse>(
      `${this.baseUrl}/createAlerts`,
      alertsToAdd
    );
  }
  
}
