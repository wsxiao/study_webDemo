/**
 * Created by shane on 2016/12/15.
 */
import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private heroesUrl = 'app/heroes';

    constructor(@Inject(Http) private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    //getHeroes(): Promise<Hero[]> {
    //    return Promise.resolve(HEROES);
    //}
    //
    //getHeroesSlowly(): Promise<Hero[]> {
    //    return new Promise<Hero[]>( resolve => setTimeout(resolve, 5000) )
    //        .then(() => this.getHeroes());
    //}

    getHero(id: number): Promise<Hero[]> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log("An error occured", error);
        return Promise.reject(error.message || error);
    }
}