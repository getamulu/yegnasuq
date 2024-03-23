import { ActivatedRoute } from '@angular/router';
import { Coffee } from '../../../shared/models/Coffee';
import { CoffeeService } from '../../../services/coffee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  coffee: Coffee[] = [];
  constructor(private coffeeService: CoffeeService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
      this.coffee = this.coffeeService.getAllCoffeeBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.coffee = this.coffeeService.getaAllCoffeeByTag(params.tag);
      else
      this.coffee = coffeeService.getAll();
    })
  }
}
