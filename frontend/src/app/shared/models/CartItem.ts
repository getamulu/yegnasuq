import { Coffee } from "./Coffee";

export class CartItem{
  constructor(public coffee:Coffee){}
  quantity:number = 1;
  price:number = this.coffee.price;
}
