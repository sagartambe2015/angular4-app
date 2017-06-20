import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';

@Component({
	selector: 'app',
	template: `
	  <b>Angular 2 Component Using Observables!</b>
	 
	  <h6 style="margin-bottom: 0">VALUES:</h6>
	  <div *ngFor="let value of values">- {{ value }}</div>
	  
	  <h6 style="margin-bottom: 0">STATUS:</h6>
	  <div>{{status}}</div>

      <input [(ngModel)]="name" #ctrl="ngModel" required>

          <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
	  
	  <button style="margin-top: 2rem;" (click)="init()">Init</button>

      <div>
        <input [(ngModel)]="hero.id" #ctrl="ngModel" required>
        <input [(ngModel)]="hero.name" #ctrl="ngModel" required>
        <p>Hero ID: {{ hero.id }}</p>
        <p>Hero Value: {{ hero.name }}</p>

      </div>
	`
})  
export class MyApp {
  
  private data: Observable<Array<number>>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  status:string;
  name: string = '';

  hero = new Hero();

  constructor() {
      
  }
  
  init() {
      this.status = "Started";
      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);
          
          setTimeout(() => {
              observer.next(43);
              
          }, 2000);

           setTimeout(() => {
              observer.next(44);
              
          }, 3000);
          
          setTimeout(() => {
              observer.complete();
          }, 4000);
          
          this.status = "Started";
      });

      let subscription = this.data.forEach(t => this.values.push(t)).then() => this.status = "Ended11");

      //let subscription = this.data.forEach(v => this.values.push(v)).then(() => this.status = "Ended");
  }

}