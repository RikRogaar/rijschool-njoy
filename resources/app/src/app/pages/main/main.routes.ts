import { Routes } from "@angular/router";
import { PricingPageComponent } from "./pricing-page/pricing-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";

export const MAIN_ROUTES: Routes = [
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
    },
];
