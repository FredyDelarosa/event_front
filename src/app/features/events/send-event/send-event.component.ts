import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-event',
  standalone: true,
  templateUrl: './send-event.component.html',
  styleUrls: ['./send-event.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SendEventComponent {
  zone: string = '';

  constructor(private http: HttpClient) {}

  sendEvent(): void {
    if (!this.zone.trim()) {
      alert('Por favor ingresa una zona.');
      return;
    }

    const eventData = { zone: this.zone };
    
    this.http.post('http://localhost:8080/events', eventData).subscribe({
      next: () => {
        alert('Evento enviado correctamente.');
        this.zone = '';
      },
      error: (error) => {
        console.error('Error enviando el evento:', error);
        alert('Error al enviar el evento.');
      }
    });
  }
}
