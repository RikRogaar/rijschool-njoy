import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideBookOpenCheck, lucideGift, lucideShieldCheck, lucideCircleCheck } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ButtonComponent,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmCardFooterDirective,
    HlmButtonDirective,
    HlmIconComponent,
    SharedModule
  ],
  providers: [
    provideIcons({
      lucideShieldCheck,
      lucideCircleCheck,
      lucideBookOpenCheck,
      lucideGift
    })
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
