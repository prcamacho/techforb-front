import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryRegionResponse } from '../interfaces/country-region-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  private readonly baseUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  getCountryByRegion():Observable<CountryRegionResponse[]>{
    return this.http.get<CountryRegionResponse[]>(`${this.baseUrl}/subregion/South%20America`)
  }
}
