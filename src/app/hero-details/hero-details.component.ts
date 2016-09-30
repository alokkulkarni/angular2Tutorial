import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  providers: [HeroService],
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(private heroService: HeroService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
        let id = +params['id'];
        this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  save(): void {
    this.heroService.update(this.hero)
          .then(this.goBack);
  }

  goBack(): void {
    window.history.back();
  }
}
