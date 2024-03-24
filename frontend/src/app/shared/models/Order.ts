import { CartItem } from "./CartItem";
import { Delivery } from "./Delivery";

export class Order{
  id!:number;
  items!: CartItem[];
  totalPrice!:number;
  name!: string;
  address!: string;
  addressDeliver!: Delivery;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
