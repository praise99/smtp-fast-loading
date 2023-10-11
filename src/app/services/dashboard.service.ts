import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * @author Tari
 * @dateCreated 2 Aug 2023
 * @description responsible for handling HTTP requests related to dashboard.
 */

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  apiServerUrl = 'https://euscd328hf.execute-api.us-east-2.amazonaws.com/api/v1/';

  /**
   * @author Tari
   * @dateCreated 2 Aug 2023
   * @description The class constructor
   * @param httpClient an instance of the HttpClient class, which is used to send HTTP requests to the API server. It is injected into the constructor of the class.
   */
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    }),
  };

  /**
   * @author Tari
   * @dateCreated 2 Aug 2023
   * @description Sends an HTTP GET request to retrieve dashboard statistics.
   * @returns Observable representing the result of the GET request
   */
  getDashboardStatistics() {
    return this.http.get(this.apiServerUrl + "dashboard", this.httpOptions)
  }
}
