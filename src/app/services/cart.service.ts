import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private selectedEvent: any = null;
  private selectedCrews: any[] = [];

  constructor() {}

  isEventInCart(event: any): boolean {
    return this.cartItems.some((item) => item.type === 'event' && item.id === event.id);
  }

  addToCart(event: any): void {
    const existingEventIndex = this.cartItems.findIndex((item) => item.type === 'event');
    if (existingEventIndex !== -1) {
      // If an object with event.type = 'event' already exists, replace it with the new event
      this.cartItems[existingEventIndex] = event;
    } else {
      // If no object with event.type = 'event' exists, simply add the event to the cart
      this.cartItems.push(event);
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getSelectedEvent(): any {
    return this.selectedEvent; // Return the selected event
  }

  setSelectedEvent(event: any): void {
    this.selectedEvent = event; // Set the selected event
  }

  getEventTotalPrice(): number {
    let total = 0;
    total = this.selectedEvent.price;
    return total;
  }


  //crews

  isCrewInCart(crew: any): boolean {
    return this.selectedCrews.some((item) => item.id === crew.id);
  }

  addCrewToCart(crew: any): void {
    const existingCrewIndex = this.selectedCrews.findIndex((item) => item.id === crew.id);
    if (existingCrewIndex === -1) {
      // If the crew does not exist in the selectedCrews array, add it
      this.selectedCrews.push(crew);
    } else {
      // If the crew already exists, replace it with the new crew
      this.selectedCrews[existingCrewIndex] = crew;
    }
  }

  removeCrewFromCart(crew: any): void {
    this.selectedCrews = this.selectedCrews.filter((item) => item.id !== crew.id);
  }

  getSelectedCrews(): any[] {
    return this.selectedCrews;
  }

  getCrewsTotalPrice(): number {
    let total = 0;
    this.selectedCrews.forEach((item) => {
      total += item.price;
      // Add more conditions for other types if necessary
    });
    return total;
  }
}