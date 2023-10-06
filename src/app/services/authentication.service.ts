import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private authTokenKey = 'authToken';
  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public user: Observable<any> = this.userSubject.asObservable();
  private apiUrl = "https://euscd328hf.execute-api.us-east-2.amazonaws.com/api/v1/"; // Update this with your API URL

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signin`, credentials)
      .pipe(
        map((response) => {
          if (response && response.token) {
            // Store the token in localStorage
            localStorage.setItem(this.authTokenKey, response.token);

            // Store the user data in localStorage
            localStorage.setItem('userData', JSON.stringify(response.user));

            // Update the userSubject with the user data
            this.userSubject.next(response.user);

            return true; // Return true for successful login
          }
          return false; // Return false for failed login
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'An unknown error occurred. Please try again later.';
          if (error.status === 400) {
            errorMessage = 'Invalid email or password. Please check your credentials and try again.';
          } else if (error.status === 401) {
            errorMessage = error.error.message || 'Unauthorized: You do not have permission to access this resource.';
          } else if (error.status === 404) {
            errorMessage = 'API endpoint not found. Please check the server URL.';
          } // Add more error handling as needed

          return throwError(errorMessage);
        })
      );
  }
  logout(): void {
    // Clear user data and token on logout
    this.clearUserData();
    this.userSubject.next(null);
  }
  clearUserData(): void {
    // Clear user data and token from localStorage
    localStorage.removeItem(this.authTokenKey);
  }


  /**
  * @author Opeoluwa
   * @dateCreated 4th Aug 2023
   * @description The function returns the currently authenticated user's data.
   * @returns An object representing the currently authenticated user's data or `null` if the user is not authenticated.
   * @dependencies None.
   * @modifiedBy - None.
   * @dateModified -None
   * @reasonForModification - None
   */
  getUser(): any {
    return this.userSubject.value;
  }


  hasPermission(permission: string): boolean {
    // Check if the user has a specific permission
    const user = this.getUser();
    return user && user.role && user.role.permissions.includes(permission);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }



  // Unsubscribe
}
