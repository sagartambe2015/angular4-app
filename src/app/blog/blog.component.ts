import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Blog }                from './blog';
import { BlogService }         from './blog.service';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'my-heroes',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.css' ]
})
export class BlogComponent implements OnInit {
  blogs: Observable<Blog[]>;
  selectedBlog: Blog;
  private searchTerms = new Subject<Blog>();

  constructor(
    private blogService: BlogService,
    private router: Router) { }

  getBlogs(): void {
     
    
  }

  add(blog :Blog): void {
    console.log("Inserted Blog....."+blog.blogText  );
    
    
    
  }

  delete(hero: Blog): void {
    // this.heroService
    //     .delete(hero.id)
    //     .then(() => {
    //       this.heroes = this.heroes.filter(h => h !== hero);
    //       if (this.selectedHero === hero) { this.selectedHero = null; }
    //     });
  }

  ngOnInit(): void {
    this.getBlogs();
    this.selectedBlog = new Blog();

    // this.blogs = this.searchTerms
    //   .debounceTime(300)        // wait 300ms after each keystroke before considering the term
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => term   // switch to new observable each time the term changes
    //     // return the http search observable
    //     ? this.blogService.getBlogs()
    //     // or the observable of empty heroes if there was no search term
    //     : Observable.of<Blog[]>([]))
    //   .catch(error => {
    //     // TODO: add real error handling
    //     console.log(error);
    //     return Observable.of<Blog[]>([]);
    //   });

  }

  onSelect(hero: Blog): void {
    //this.selectedHero = hero;
  }

  gotoDetail(): void {
    //this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
