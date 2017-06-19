import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Blog } from './blog';

@Injectable()
export class BlogService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api
  private blogs:Blog[];
  constructor(private http: Http) { }

  getBlogs(): Blog[] {
    var blogs:Blog[];
    blogs = [
      { id: 11,  userId: "10",  blogHeader: "Header 10",  blogText: "Blog Text 10"},
      { id: 11,  userId: "11",  blogHeader: "Header 11",  blogText: "Blog Text 11"},
      { id: 11,  userId: "12",  blogHeader: "Header 12",  blogText: "Blog Text 12"},
      { id: 11,  userId: "13",  blogHeader: "Header 13",  blogText: "Blog Text 13"},
      { id: 11,  userId: "14",  blogHeader: "Header 14",  blogText: "Blog Text 14"},
      { id: 11,  userId: "15",  blogHeader: "Header 15",  blogText: "Blog Text 15"},
      { id: 11,  userId: "16",  blogHeader: "Header 16",  blogText: "Blog Text 16"},
      { id: 11,  userId: "17",  blogHeader: "Header 17",  blogText: "Blog Text 17"},
      { id: 11,  userId: "18",  blogHeader: "Header 18",  blogText: "Blog Text 18"},
      { id: 11,  userId: "19",  blogHeader: "Header 19",  blogText: "Blog Text 19"},
      { id: 11,  userId: "20",  blogHeader: "Header 20",  blogText: "Blog Text 20"}
    ];
    this.blogs = blogs;
    return blogs;
    // return this.http.get(this.heroesUrl)
    //            .toPromise()
    //            .then(response => response.json().data as Blog[])
    //            .catch(this.handleError);
  }


  getHero(id: number): Promise<Blog> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Blog)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(blog: Blog): Blog {
    this.blogs.push(blog);
    return blog;
  }

  update(hero: Blog): Promise<Blog> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

