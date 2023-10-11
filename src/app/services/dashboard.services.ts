
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl: string = "https://euscd328hf.execute-api.us-east-2.amazonaws.com/api/v1"; // Update this with your API URL


  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    }),
  };

  getDashboardStatistics() {
    return this._http.get(`${this.apiUrl}/dashboard`, this.httpOptions)
  }
}
