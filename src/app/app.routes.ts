import { Routes } from '@angular/router';
import { AlertsListComponent } from './features/alerts/alerts-list/alerts-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'alerts', pathMatch: 'full' },
  { path: 'alerts', component: AlertsListComponent }
];
