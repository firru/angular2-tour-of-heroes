/**
 * Created by firru on 30.06.16.
 */
import {provideRouter, RouterConfig} from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from "./dashbourd.component";

const routes: RouterConfig = [
    {
      path: '',
      redirectTo: '/dashboard',
      terminal: true
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];