import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource } from '@angular/material/table';
import { Alert } from '../../../core/models/alert.models';
import { WebSocketService } from '../../../core/services/websocket.service';
import { Subscription } from 'rxjs';

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
  private wsSubscription!: Subscription;

  constructor(private wsService: WebSocketService) {}

  ngOnInit(): void {
    this.wsService.connect();
  
    this.wsSubscription = this.wsService.getAlertStream().subscribe((alert: Alert) => {
      console.log('📌 Alerta recibida en componente:', alert);
      this.dataSource.data = [...this.dataSource.data, alert];
    });
  }
  
  ngOnDestroy(): void {
    this.wsSubscription.unsubscribe();
    this.wsService.disconnect();
    console.log('🧹 WebSocket limpio al destruir el componente');
  }
  
}
