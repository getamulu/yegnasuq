import { ActivatedRoute } from '@angular/router';
import { Coffee } from '../../../shared/models/Coffee';
import { CoffeeService } from '../../../services/coffee.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  coffee: Coffee[] = [];
  constructor(private coffeeService: CoffeeService, activatedRoute:ActivatedRoute){
    let coffeeObservable : Observable<Coffee[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
      coffeeObservable = this.coffeeService.getAllCoffeeBySearchTerm(params.searchTerm);
      else if(params.tag)
      coffeeObservable = this.coffeeService.getaAllCoffeeByTag(params.tag);
      else
      coffeeObservable = coffeeService.getAll();

      coffeeObservable.subscribe((serverCoffee) => {
        this.coffee = serverCoffee;
      })
    })
  }
}
