/**
 * Created by firru on 30.06.16.
 */
import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import {ROUTER_DIRECTIVES} from "@angular/router";
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['/dashboard']">Dashboard</a>
        <a [routerLink]="['/heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}