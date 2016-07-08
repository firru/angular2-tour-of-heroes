import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    providers: []
})

export class HeroesComponent implements OnInit {
    ngOnInit() {
        // Helden initial vom HeroService holen
        this.getHeroes();
    }

    constructor(
		private router: Router,
		private heroService: HeroService) {}
    
    heroes: Hero[];
    
    selectedHero: Hero;
    
    onSelect(hero: Hero) {this.selectedHero = hero; };
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
	
	gotoDetail() {
		this.router.navigate(['/detail', this.selectedHero.id]);
	};
}