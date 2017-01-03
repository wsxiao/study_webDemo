/**
 * Created by shane on 2016/12/14.
 */
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId : module.id,
    selector : 'my-heroes',
    templateUrl : 'heroes.component.html',
    styleUrls : [ 'heroes.component.css' ],
    providers : [ HeroService ]
})


export class HeroesComponent implements OnInit {
    heroes : Hero[];
    selectedHero : Hero;

    constructor(
        @Inject(HeroService) private heroService: HeroService,
        @Inject(Router) private router: Router
    ){}

    getHeroes(): void {
        //this.heroes = this.heroService.getHeroes();     //同步加载
        this.heroService.getHeroes().then(heroes => this.heroes=heroes);    //异步加载
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes=heroes);  //异步延时加载
    }

    add(name: string): void {
        name = name.trim();
        if(!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}