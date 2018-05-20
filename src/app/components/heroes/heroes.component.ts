import { Router } from '@angular/router';
import { HeroesService, Heroe } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];


  constructor( private _heroesService: HeroesService,
private router: Router
  ) {
    console.log(" Constructor ");
  }
  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);


  }

  verHeroe( idx: number ) {
    this.router.navigate(['/heroe', idx] );
    console.log(idx);

  }
}
