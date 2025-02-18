import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/main/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/main/about-us/about-us.component';
import { PricingPageComponent } from './pages/main/pricing-page/pricing-page.component';
import { ContactComponent } from './pages/main/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/main/main.routes').then(m => m.MAIN_ROUTES),
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES),
    }
];
