
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl: string = "https://euscd328hf.execute-api.us-east-2.amazonaws.com/api/v1"; // Update this with your API URL


  constructor(private _http: HttpClient) { }


  getDashboardStatistics() {
    return this._http.get(`${this.apiUrl}/dashboard`)
  }
}
