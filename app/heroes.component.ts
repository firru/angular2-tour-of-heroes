import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    template: `
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        `,
    directives: [HeroDetailComponent],
    providers: []
})

export class HeroesComponent implements OnInit {
    ngOnInit() {
        // Helden initial vom HeroService holen
        this.getHeroes();
    }

    constructor(private heroService: HeroService) {}
    
    heroes: Hero[];
    
    selectedHero: Hero;
    
    onSelect(hero: Hero) {this.selectedHero = hero; };
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
}