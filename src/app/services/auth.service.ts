
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://your-express-server-url/api'; // Replace with your Express server URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }

  register(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }
}