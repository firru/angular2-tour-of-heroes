/**
 * Created by firru on 27.06.16.
 */
import { Injectable}  from "@angular/core";
import { Http } from '@angular/http';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(private http: Http) {
    };

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);
    };

    private handleError(error: any) {
        console.error('An error occurred', error);

        return Promise.reject(error.message || error);
    };

    getMockHeroes() {
        return Promise.resolve(HEROES);
    };

    getHeroesSlowly() {
        return new Promise(resolve => setTimeout(() => resolve(HEROES), 2000));
    };

    getHero(id: number) {
		return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
	};
}
