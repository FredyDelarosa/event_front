import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Alert } from '../../../core/models/alert.models';

@Component({
  selector: 'app-alert-item',
  standalone: true,
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss'],
  imports: [CommonModule, MatCardModule]
})
export class AlertItemComponent {
  @Input() alert!: Alert;
}
