import { Injectable } from '@angular/core';
import type { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  getHerores(): Observable<Hero[]> {
    // la version de Observable espera a que se emita el array de heroes, osea que es asincrono, una vez que se emite el array, se ejecuta el subscribe, el cual devuelve un observable que es el array de heroes. es como si un camion espera por unos pasajeros, cuando llegan, esto los lleva a otro lado y luego se bajan, el camion seria el Observable, subscribe es cuando los lleva a su destino y Hero[] son los pasajeros.
    // const heroes = of(HEROES); // of es una funcion que devuelve un observable, es como si fuera una promesa, pero no es una promesa, es un observable.
    // this.messageService.add('HeroService: fetched heroes');
    // return heroes;
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_heroes) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    ) // get es una funcion que devuelve un observable, es como si fuera una promesa, pero no es una promesa, es un observable, se tiene que especificar el tipo de dato que se espera.
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
