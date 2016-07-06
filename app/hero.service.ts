/**
 * Created by firru on 27.06.16.
 */
import { Injectable}  from "@angular/core";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    };

    getHeroesSlowly() {
        return new Promise(resolve => setTimeout(() => resolve(HEROES), 2000));
    };
}