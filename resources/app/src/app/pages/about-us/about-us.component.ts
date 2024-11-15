import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconComponent, HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideShieldCheck, lucideUser, lucideClock } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { SharedModule } from '../../shared.module';
import { HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective } from '@spartan-ng/ui-tabs-helm';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmButtonDirective,
    HlmIconModule,
    SharedModule
  ],
  providers: [
    provideIcons({
      lucideShieldCheck,
      lucideUser,
      lucideClock
    })
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutUsComponent {
  public currentTab = signal('features');
  public readonly tabs = [
    {
      label: 'features',
      content: {
        title: 'ABOUT_US.CAR.TABS.FEATURES.TITLE',
        description: 'ABOUT_US.CAR.TABS.FEATURES.DESCRIPTION',
        list: 'ABOUT_US.CAR.TABS.FEATURES.LIST'
      }
    },
    {
      label: 'comfort',
      content: {
        title: 'ABOUT_US.CAR.TABS.COMFORT.TITLE',
        description: 'ABOUT_US.CAR.TABS.COMFORT.DESCRIPTION',
        list: 'ABOUT_US.CAR.TABS.COMFORT.LIST'
      }
    },
    {
      label: 'safety',
      content: {
        title: 'ABOUT_US.CAR.TABS.SAFETY.TITLE',
        description: 'ABOUT_US.CAR.TABS.SAFETY.DESCRIPTION',
        list: 'ABOUT_US.CAR.TABS.SAFETY.LIST'
      }
    }
  ]
}
