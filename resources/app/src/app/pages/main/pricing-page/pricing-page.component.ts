import { Component, inject, Signal, signal, computed } from '@angular/core';
import { SharedModule } from '../../../shared.module';
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
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent {
  private readonly translate = inject(TranslateService);
  private readonly PACKAGES_TO_SHOW = ['NJOY_1', 'NJOY_4', 'NJOY_6'];

  public currentTab = signal('packages');

  public individualLessons = computed(() => {
    const lessonsData = this.translate.instant('PRICING.INDIVIDUAL_LESSONS.LESSONS');
    const lessons = Object.values(lessonsData) as CapitalizedLesson[];

    return lessons.map((lesson: CapitalizedLesson) => ({
      name: lesson.NAME,
      price: lesson.PRICE
    })) as IndividualLesson[];
  });

  public packages = computed(() => {
    const packagesData = this.translate.instant('PRICING.PACKAGES.PACKAGES');
    const packages = Object.values(packagesData) as CapitalizedPackage[];

    const mappedPackages = packages.map((pkg: CapitalizedPackage) => ({
      identifier: pkg.IDENTIFIER,
      name: pkg.NAME,
      price: pkg.PRICE,
      popular: pkg.POPULAR,
      features: pkg.FEATURES.map((feature: CapitalizedFeature) => ({
        name: feature.NAME,
        included: feature.INCLUDED
      }))
    })) as Package[];

    const filteredPackages = mappedPackages.filter((pkg: Package) => this.PACKAGES_TO_SHOW.includes(pkg.identifier));

    return filteredPackages;
  });
}

export interface CapitalizedLesson {
  NAME: string;
  PRICE: string;
}

export interface IndividualLesson {
  name: string;
  price: string;
}

export interface CapitalizedPackage {
  IDENTIFIER: string;
  NAME: string;
  PRICE: string;
  POPULAR: boolean;
  FEATURES: CapitalizedFeature[];
}

export interface Package {
  identifier: string;
  name: string;
  price: string;
  popular: boolean;
  features: Feature[];
}

export interface CapitalizedFeature {
  NAME: string;
  INCLUDED: boolean;
}

export interface Feature {
  name: string;
  included: boolean;
}

