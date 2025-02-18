import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
    },
    {
        path: 'pricing',
        component: PricingPageComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    }
];
