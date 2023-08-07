import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent  implements OnInit {

  constructor(private modalController: ModalController, private cartService: CartService, private alertController: AlertController) { }

  ngOnInit() {
    this.addAttributes();
    this.isEventInCart = this.cartService.isEventInCart(this.event);
  }

  event: any;
  isEventInCart: boolean = false;

  addAttributes() {
    this.event.booked = false;
    this.event.type = 'event';
  }

  dismiss() {
    this.modalController.dismiss();
  }
  
  onCloseModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  onBook(event: any) {
    const currentEvent = this.cartService.getSelectedEvent();
    
    if (currentEvent) {
      // If there is an existing event in the cart
      this.showConfirmationDialog(event, currentEvent);
    } else {
      // If there is no existing event in the cart, directly book the new event
      event.booked = true;
      console.log(event);
      console.log('Booked!');
      this.cartService.setSelectedEvent(event); // Set the new event as the selected event
      this.cartService.addToCart(event); // Add the event to the cart
      this.modalController.dismiss(); // Close the modal
    }
  }

// Show the confirmation dialog
async showConfirmationDialog(newEvent: any, currentEvent: any) {
  const alert = await this.alertController.create({
    header: 'Confirm Event Change',
    message: `You already have "${currentEvent.title}" booked. Do you want to replace it with "${newEvent.title}"?`,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Booking canceled');
        },
      },
      {
        text: 'Replace',
        handler: () => {
          // Unbook the existing event
          currentEvent.booked = false;

          // Mark the new event as booked and update it in the cart
          newEvent.booked = true;
          console.log(newEvent);
          console.log('Booked!');
          this.cartService.setSelectedEvent(newEvent); // Set the new event as the selected event
          this.cartService.addToCart(newEvent); // Add the event to the cart
          this.modalController.dismiss(); // Close the modal
        },
      },
    ],
  });

  await alert.present();
}

  check(event: any){
    console.log(event);
  }


}
