import { Component } from '@angular/core';
import { Item } from '../models/item';
import { CartService } from '../cart/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  public cart = new BehaviorSubject<Item[]>([]);
  constructor(private service: CartService) {
    this.cart = service.cart;
  }

  getTotalPrice(): number {
    return this.cart.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

}
