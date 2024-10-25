import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: 'blue' | 'outline' | 'white' = 'blue';
}
