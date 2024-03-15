import { Injectable } from "@angular/core";
import { Item } from "../models/item";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})


export class CartService {

    public cart = new BehaviorSubject<Item[]>([]);
    items$ = this.cart.asObservable();


    addToCart(item: Item) {
        const currentCart = this.cart.value;
        if (currentCart.find((e) => e.id === item.id)) {
            const newCart = currentCart.map((e) => e.id === item.id ? { ...e, quantity: e.quantity + 1 } : e);

            this.cart.next([...newCart]);
        } else {
            this.cart.next(([...currentCart, item]))
            item.quantity = 1
        }
    }


    removeFromCart(item: Item) {
        const currentCart = this.cart.value;
        if (currentCart.find((e) => e.id === item.id)) {
            if (item.quantity > 1) {
                const newCart = currentCart.map((e) => e.id === item.id ? { ...e, quantity: e.quantity - 1 } : e);
                item.price -= item.price;
                this.cart.next([...newCart])
            } else {
                this.cart.next(currentCart.filter((e) => e.id !== item.id))
            }
        }
    }


}