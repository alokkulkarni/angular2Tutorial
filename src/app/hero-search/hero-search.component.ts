import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { HerosearchService } from '../herosearch.service';
import { Hero } from '../hero';


@Component({
  providers: [HerosearchService],
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerm = new Subject<String>();

  search(term: string): void {
    this.searchTerm.next(term);
  }

  constructor(private herosearchService: HerosearchService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.searchTerm
        .debounceTime(300)  // wait for 300ms pause in events
        .distinctUntilChanged() // ignore if next search term is same as previous
        .switchMap(term => term ? this.herosearchService.search(term) : Observable.of<Hero[]>([])) // switch to new observable each time
        .catch(error => {
            console.log(error);
            return Observable.of<Hero[]>([]);
        });
  }

  gotoDetail(hero: Hero): void {
      let link = ['/detail', hero.id];
      this.router.navigate(link);
  }

  
}
