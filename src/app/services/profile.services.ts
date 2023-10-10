import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  apiUrl: string =  "https://euscd328hf.execute-api.us-east-2.amazonaws.com/api/v1/"; // Update this with your API URL
;

  constructor(private _httpClient: HttpClient) {}


  getAllUsers(payload:any): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/users`, {
      params: payload.params,
    });
  }

  getUser(payload:any): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/users/me`);
  }

  updateUser(payload:any): Observable<any> {
    return this._httpClient.patch(
      `${this.apiUrl}/users/me`,
      payload.body
    );
  }

  updatePassword(payload:any): Observable<any> {
    return this._httpClient.patch(
      `${this.apiUrl}/users/me/update-password`,
      payload.body
    );
  }

}
