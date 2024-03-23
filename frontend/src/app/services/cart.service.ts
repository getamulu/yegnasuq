import { BehaviorSubject, Observable } from 'rxjs';

import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Coffee } from '../shared/models/Coffee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(coffee: Coffee): void{
    let cartitem = this.cart.items
    .find(item => item.coffee.id === coffee.id);
    if (cartitem)
      return;

    this.cart.items.push(new CartItem(coffee));
    this.setCartToLocalStorage();
  }

  removeFromCart(coffeeId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.coffee.id != coffeeId);
      this.setCartToLocalStorage();
  }

  changeQuantity(coffeeId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.coffee.id === coffeeId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.coffee.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
