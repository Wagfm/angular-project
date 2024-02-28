import {Component, Input, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {ActivatedRoute, Params} from "@angular/router";
import {HeroService} from "../../services/hero.service";
import {switchMap} from "rxjs"
import {Hero} from "../../hero";

@Component({
    selector: "app-hero-detail",
    templateUrl: "./hero-detail.component.html",
    styleUrl: "./hero-detail.component.css"
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero | undefined

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap((params: Params) => this.heroService.getHero(+params['id'])))
            .subscribe((hero: Hero | undefined) => this.hero = hero);
    }

    goBack(): void {
        this.location.back()
    }
}