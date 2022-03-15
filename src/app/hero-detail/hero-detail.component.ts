import { Component, Input, OnInit } from '@angular/core';
import type { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?: Hero;
  hero: Hero | undefined;
  constructor(
    private route: ActivatedRoute, // contiene informacion sobre la ruta actual, sirve para obtener parametros de la ruta, en este case el id del heroe.
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // convierte el string a un numero. este get siempre devuelve un string, por lo que hay que convertirlo a un numero ya que ese es el tipo de dato que se espera
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
