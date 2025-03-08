import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alert } from '../models/alert.models';

@Injectable({
  providedIn: 'root'
})
export class AlertApiService {
  private apiUrl = 'http://18.209.96.191:8081/alerts';

  constructor(private http: HttpClient) {}

  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(this.apiUrl);
  }
}
