import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService} from '../hero.service';




@Component({
  providers: [HeroService],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
  trigger('heroState', [
    state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.1)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
    transition('void => inactive', [
      style({transform: 'translateX(-100%) scale(1)'}),
      animate(100)
    ]),
    transition('inactive => void', [
      animate(100, style({transform: 'translateX(100%) scale(1)'}))
    ]),
    transition('void => active', [
      style({transform: 'translateX(0) scale(0)'}),
      animate(200)
    ]),
    transition('active => void', [
      animate(200, style({transform: 'translateX(0) scale(0)'}))
    ])
  ])
 ]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    // this.getHeroes();
    this.getHeoresSlowly();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero.id + " " + this.selectedHero.name);
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeoresSlowly(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: String): void {
    name = name.trim();
    if (!name) { return; };
    this.heroService.create(name)
            .then(hero => {
              this.heroes.push(hero);
              this.selectedHero = null;
            });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero)
          .then(() => {
              this.heroes = this.heroes.filter(h => h !== hero);
              if (this.selectedHero === hero) { this.selectedHero = null; }
          });
  }

}
