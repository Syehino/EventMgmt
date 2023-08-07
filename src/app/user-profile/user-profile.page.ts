import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  cartItems: any[] = [];
  cartCrews: any[] = [];
  eventsTotalPrice: number = 0;
  crewsTotalPrice: number = 0;
  totalPrice: number = 0;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartCrews = this.cartService.getSelectedCrews();
    console.log(this.crewsTotalPrice);
  }

  ionViewWillEnter() {
    this.eventsTotalPrice = this.cartService.getEventTotalPrice();
    this.crewsTotalPrice = this.cartService.getCrewsTotalPrice();
    console.log(this.eventsTotalPrice)
    console.log(this.crewsTotalPrice);
    this.totalPrice = this.eventsTotalPrice + this.crewsTotalPrice;
    console.log(this.totalPrice);
  }

  checkCart() {
    console.log(this.cartItems);
    console.log(this.cartCrews);
  }

}
