import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from '../../core/models/alert.models';
import { AlertApiService } from '../../core/services/alert-api.service';

@Injectable({
  providedIn: 'root'
})
export class GetAlertsUseCase {
  constructor(private alertApiService: AlertApiService) {}

  execute(): Observable<Alert[]> {
    return this.alertApiService.getAlerts();
  }
}
