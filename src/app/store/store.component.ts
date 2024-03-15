import { Component, OnInit, inject } from '@angular/core';
import { apiService } from '../services/api.service';
import { Item } from '../models/item';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { group } from '@angular/animations';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  service = inject(apiService)


  groceries: Item[] = [];
  showItems: Item[] = [];

  ngOnInit() {
    this.service.getItems().subscribe(
      (res: any) => {
        this.groceries = res;
        console.log(this.groceries)
        this.showItems = this.groceries;
      })

  }


  constructor(private cartService: CartService) { }

  addToCart(item: Item) {
    this.cartService.addToCart(item)
  }

  filterByFruit() {
    this.showItems = this.groceries.filter(item => item.type === 'fruit');
  }

  filterByVeg() {
    this.showItems = this.groceries.filter(item => item.type === 'vegetable');
  }

  everything() {
    this.showItems = this.groceries;
  }

  sortByPrice() {
    this.showItems = this.showItems.slice().sort((a, b) => a.price - b.price);
  }

  sortByName() {
    this.showItems = this.showItems.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

}
