import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlertsListComponent } from './features/alerts/alerts-list/alerts-list.component';
import { SendEventComponent } from "./features/events/send-event/send-event.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    AlertsListComponent,
    SendEventComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
