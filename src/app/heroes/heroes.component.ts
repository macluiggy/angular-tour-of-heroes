import { Component, OnInit } from '@angular/core';

@Component({
  // Component es un decorador que especifica los metadatos de Angular para el componente.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';

  constructor() {}

  ngOnInit(): void {} // ngOnInit es un hook que se ejecuta cuando el componente es creado, es parecido a componentDidMount o useEffect en React.
}
