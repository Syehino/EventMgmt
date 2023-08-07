import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.page.html',
  styleUrls: ['./booking-page.page.scss'],
})
export class BookingPagePage implements OnInit {

  constructor(private cartService: CartService, private alertController: AlertController, private router: Router) { }

  cartItems: any[] = [];
  cartCrews: any[] = [];
  combinedCart: any[] = [];
  eventsTotalPrice: number = 0;
  crewsTotalPrice: number = 0;
  totalPrice: number = 0;

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartCrews = this.cartService.getSelectedCrews();
    this.combinedCart = this.cartItems.concat(this.cartCrews);
  }

  ionViewWillEnter() {
    // Calculate the event and crew prices
    this.eventsTotalPrice = this.cartService.getEventTotalPrice();
    this.crewsTotalPrice = this.cartService.getCrewsTotalPrice();

    // Convert undefined values to 0 for safe addition
    this.eventsTotalPrice = Number(this.eventsTotalPrice);
    this.crewsTotalPrice = Number(this.crewsTotalPrice);

    console.log(this.eventsTotalPrice);
    console.log(this.crewsTotalPrice);

    // Calculate the total price
    this.totalPrice = this.eventsTotalPrice + this.crewsTotalPrice;
    console.log(this.totalPrice);
  }

// Mock checkout process
async checkout() {
  // Implement your checkout logic here, e.g., sending payment request to server, etc.
  // For this mockup, we'll show a confirmation alert.

  const alert = await this.alertController.create({
    header: 'Checkout Success',
    message: 'Your booking has been processed successfully.',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          //add to order history
          //clear cart
          this.cartService.clearCart();
          location.reload();
        },
      },
    ],
  });

  await alert.present();
}

}
