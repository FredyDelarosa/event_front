import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert } from '../models/alert.models';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: WebSocket;
  private alertSubject = new Subject<Alert>();

  connect(): void {
    console.log('📡 Intentando conectar al WebSocket...');
    this.socket = new WebSocket('ws://localhost:8081/ws');

    this.socket.onopen = () => {
      console.log('✅ Conexión WebSocket establecida');
    };

    this.socket.onmessage = (event: MessageEvent) => {
      console.log('📥 Mensaje recibido por WebSocket:', event.data);
      const data: Alert = JSON.parse(event.data);
      this.alertSubject.next(data);
    };

    this.socket.onerror = (err) => {
      console.error('❌ Error en WebSocket:', err);
    };

    this.socket.onclose = () => {
      console.warn('🔌 Conexión WebSocket cerrada');
    };
  }

  getAlertStream(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      console.log('🔕 Desconectando WebSocket...');
    }
  }
}
