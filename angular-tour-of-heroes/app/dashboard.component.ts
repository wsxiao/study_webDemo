/**
 * Created by shane on 2016/12/15.
 */
import { Component, OnInit, Inject } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId : module.id,
    selector : 'my-dashboard',
    templateUrl : 'dashboard.component.html',
    styleUrls : [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
    heroes : Hero[] = [];

    constructor(@Inject(HeroService) private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes=heroes.slice(1,5));
    }
}