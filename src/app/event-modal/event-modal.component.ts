import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  event: any;

  dismiss() {
    this.modalController.dismiss();
  }
  
  onCloseModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
