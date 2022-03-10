import { Component, OnInit } from '@angular/core';
import type { Hero } from '../hero';
import { HEROES } from '../mock-hero';

@Component({
  // Component es un decorador que especifica los metadatos de Angular para el componente.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit(): void {} // ngOnInit es un hook que se ejecuta cuando el componente es creado, es parecido a componentDidMount o useEffect en React.
}
