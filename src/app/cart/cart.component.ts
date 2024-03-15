import { Component } from '@angular/core';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart: Item[] = [];

  private sub!: Subscription;

  constructor(private cartService: CartService) {
    this.sub = this.cartService.items$.subscribe(cart => { this.cart = cart })
  }


  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }


}
