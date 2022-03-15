import { Component, OnInit } from '@angular/core';
import type { Hero } from '../hero';
// import { HEROES } from '../mock-hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  // Component es un decorador que especifica los metadatos de Angular para el componente.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  heroes: Hero[] = [];
  // selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    // private messageService: MessageService
  ) {}

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  gerHeroes(): void {
    this.heroService.getHerores().subscribe((heroes) => (this.heroes = heroes));
  }
  
  ngOnInit(): void {
    this.gerHeroes();
  } // ngOnInit es un hook que se ejecuta cuando el componente es creado, es parecido a componentDidMount o useEffect en React.
}
