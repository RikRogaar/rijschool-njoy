import { Component, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideX } from '@ng-icons/lucide';
import { HlmTabsComponent, HlmTabsContentDirective, HlmTabsListComponent, HlmTabsTriggerDirective } from '@spartan-ng/ui-tabs-helm';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [
    SharedModule,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective,
    HlmCardFooterDirective,
    HlmButtonDirective,
    HlmIconComponent,
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,
  ],
  providers: [
    provideIcons({ lucideCheck, lucideX })
  ],
  templateUrl: './pricing-page.component.html',
})
export class PricingPageComponent {
  private readonly translate = inject(TranslateService);
  public currentTab = signal('packages');

  public readonly packages: Package[] = [];

  constructor() {
    this.packages = this.translate.instant('PRICING.PACKAGES.PACKAGES');
  }
}

export interface Package {
  name: string;
  price: string;
  popular: boolean;
  features: Feature[];
}

export interface Feature {
  name: string;
  included: boolean;
}
