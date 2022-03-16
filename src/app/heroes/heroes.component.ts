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
    private heroService: HeroService
  ) // private messageService: MessageService
  {}

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  gerHeroes(): void {
    this.heroService.getHerores().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe(); // aunque no se haga nada mas que borrar, el subscribe es para que se ejecute el deleteHero
  }

  ngOnInit(): void {
    this.gerHeroes();
  } // ngOnInit es un hook que se ejecuta cuando el componente es creado, es parecido a componentDidMount o useEffect en React.
}
