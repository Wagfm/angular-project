import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {HeroService} from "./services/hero.service";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})

export class AppModule {
}