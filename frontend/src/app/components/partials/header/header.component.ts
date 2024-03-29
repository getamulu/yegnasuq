import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartQuantity = 0;
  constructor(cartService : CartService){
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }
}
