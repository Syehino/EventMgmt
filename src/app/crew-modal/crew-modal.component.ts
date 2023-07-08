import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crew-modal',
  templateUrl: './crew-modal.component.html',
  styleUrls: ['./crew-modal.component.scss'],
})
export class CrewModalComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  crew: any;

  dismiss() {
    this.modalController.dismiss();
  }
  
  onCloseModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
