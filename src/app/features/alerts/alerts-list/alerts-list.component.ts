import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource } from '@angular/material/table';
import { GetAlertsUseCase } from '../../../domain/usecases/get-alerts.usecase';
import { Alert } from '../../../core/models/alert.models';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-alerts-list',
  standalone: true,
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ]
})
export class AlertsListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'message', 'createdAt'];
  dataSource = new MatTableDataSource<Alert>([]);
  private pollingSubscription!: Subscription;

  constructor(private getAlertsUseCase: GetAlertsUseCase) {}

  ngOnInit(): void {
    this.startPolling();
  }

  ngOnDestroy(): void {
    this.stopPolling();
  }

  startPolling(): void {
    this.pollingSubscription = interval(5000).subscribe(() => {
      this.loadAlerts();
    });
  }

  stopPolling(): void {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  loadAlerts(): void {
    this.getAlertsUseCase.execute().subscribe({
      next: (alerts) => {
        this.dataSource.data = alerts;
      },
      error: (error) => console.error('Error obteniendo alertas:', error)
    });
  }
}
