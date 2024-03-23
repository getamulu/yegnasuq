import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from '../../../services/cart.service';
import { Coffee } from '../../../shared/models/Coffee';
import { CoffeeService } from '../../../services/coffee.service';
import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-coffee-page',
  templateUrl: './coffee-page.component.html',
  styleUrl: './coffee-page.component.css'
})
export class CoffeePageComponent {
  coffee!:Coffee;
  constructor(activatedRoute:ActivatedRoute, coffeeService:CoffeeService,
    private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      coffeeService.getCoffeeById(params.id).subscribe(serverCoffee => {
        this.coffee = serverCoffee;
      });
    })
  }

  addToCart(){
    this.cartService.addToCart(this.coffee);
    this.router.navigateByUrl('/cart-page');
  }
}
