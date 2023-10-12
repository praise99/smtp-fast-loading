import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * @author Tari
 * @dateCreated 4 Aug 2023
 * @description responsible for handling HTTP requests related to email request.
 */

@Injectable({
  providedIn: 'root'
})
export class EmailRequestService {

  apiServerUrl = 'https://euscd328hf.execute-api.us-east-2.amazonaws.com/api/v1/';

  /**
   * @author Tari
   * @dateCreated 4 Aug 2023
   * @description The class constructor
   * @param httpClient an instance of the HttpClient class, which is used to send HTTP requests to the API server. It is injected into the constructor of the class.
   */
  constructor(private http: HttpClient) { }

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
  })

  /**
   * @author Tari
   * @dateCreated 4 Aug 2023
   * @description Sends an HTTP GET request to retrieve email requests.
   * @param payload Payload containing request params
   * @returns Observable representing the result of the GET request
   * @modifiedBy Opeoluwa
   * @resonForModification Ability to send parameters like search etc
   * @dateModified 24th Aug 2023
   */
  getEmailRequest(payload: any) {
    return this.http.get(this.apiServerUrl + "sent-emails/", { params: payload.params, headers: this.httpOptions });
  }

}
