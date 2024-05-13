import { DeleteResponse } from './../interfaces/delete-response.interface';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { SeveritiesByTypeResponse } from '../interfaces/severities-by-type-response.interface';
import { NewPlantResponse } from '../interfaces/new-plant-response.interface';
import { AddAlerts } from '../interfaces/addAlerts.interface';
import { AddAlertsResponse } from '../interfaces/addAlerts-response.interface';
import { TypesBySeverity } from '../interfaces/types-by-severity-response.interface';
import { NewPlant } from '../interfaces/newPlant.interface';
import { AllAlertsResponse } from '../interfaces/allAlerts-response.interface';
import { error } from 'console';

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
  getTypesBySeverity(id: string): Observable<TypesBySeverity> {
    return this.http.get<TypesBySeverity>(
      `${this.baseUrl}/alerts/severity/${id}`
    );
  }

  getAllAlerts(): Observable<AllAlertsResponse> {
    return this.http.get<AllAlertsResponse>(`${this.baseUrl}/plants/alerts`);
  }

  deletePlant(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/plants/${id}`).pipe(
      catchError((err) => {
        console.log('Hubo un error al eliminar la planta', err);
        return of(false);
      }),
      map((resp) => {
        console.log('Respuesta del servidor:', resp);
        return true;
      })
    );
  }
}
