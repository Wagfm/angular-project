import {Component, OnInit} from '@angular/core';
import {Hero} from "../../hero";
import {HeroService} from "../../services/hero.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-heroes',
    templateUrl: "./heroes.component.html",
    styleUrl: "heroes.component.css",
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero | undefined;
    heroes: Hero[] = []

    constructor(private router: Router, private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.getHeroes()
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        if (this.selectedHero !== undefined)
            this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
