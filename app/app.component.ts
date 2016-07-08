/**
 * Created by firru on 30.06.16.
 */
import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import {ROUTER_DIRECTIVES} from "@angular/router";
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}