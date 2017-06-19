import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Blog }                from './blog';
import { BlogService }         from './blog.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.css' ]
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  selectedBlog: Blog;

  constructor(
    private blogService: BlogService,
    private router: Router) { }

  getBlogs(): void {
    this.blogs = this.blogService
        .getBlogs();
    
  }

  add(blogHeader: string,blogText: string): void {
    console.log("Inserted Blog....."+blogHeader);

    this.selectedBlog = new Blog();
    this.selectedBlog.blogHeader = blogHeader;
    this.selectedBlog.blogText = blogText;
    this.blogService.create(this.selectedBlog);    
    this.getBlogs();    
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
  }

  onSelect(hero: Blog): void {
    //this.selectedHero = hero;
  }

  gotoDetail(): void {
    //this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
