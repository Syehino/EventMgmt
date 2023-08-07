import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-crew-modal',
  templateUrl: './crew-modal.component.html',
  styleUrls: ['./crew-modal.component.scss'],
})
export class CrewModalComponent  implements OnInit {

  constructor(private modalController: ModalController, private cartService: CartService) { }

  ngOnInit() {}

  crew: any;
  
  addCrewToCart(crew: any): void {
    this.cartService.addCrewToCart(crew); // Add the crew to the cart service
    console.log('Crew added to cart:', crew);
  }

  removeCrewFromCart(crew: any): void {
    this.cartService.removeCrewFromCart(crew); // Remove the crew from the cart service
    console.log('Crew removed from cart:', crew);
  }

  isCrewInCart(crew: any): boolean {
    return this.cartService.isCrewInCart(crew); // Check if the crew is in the cart
  }

  dismiss() {
    this.modalController.dismiss();
  }
  
  onCloseModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
