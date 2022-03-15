import { Injectable } from '@angular/core';
import type { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHerores(): Observable<Hero[]> { // la version de Observable espera a que se emita el array de heroes, osea que es asincrono, una vez que se emite el array, se ejecuta el subscribe, el cual devuelve un observable que es el array de heroes. es como si un camion espera por unos pasajeros, cuando llegan, esto los lleva a otro lado y luego se bajan, el camion seria el Observable, subscribe es cuando los lleva a su destino y Hero[] son los pasajeros.
    const heroes = of(HEROES); // of es una funcion que devuelve un observable, es como si fuera una promesa, pero no es una promesa, es un observable.
    this.messageService.add('HeroService: fetched heroes');
    return heroes
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
