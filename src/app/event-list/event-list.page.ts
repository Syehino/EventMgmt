import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventModalComponent } from '../event-modal/event-modal.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  selectedCardIndex: number = -1;

  events: any[] = [
    {
      title: 'General Event',
      description: 'This is perfect for general events.',
      extendedDescription: 'This is a general event. It is perfect for any kind of event. It is very affordable and can be used for any kind of event.',
      image: 'https://shoalhavenentertainment.com.au/Sites/SEC/Images/Tiles/sec-image_plan-event_functions-events.jpg?ver=2019-10-18-101601-240',
      price: '1000',
      location: 'Cheras',
      pax: '300 - 500',
    },
    {
      title: 'General Conference',
      description: 'Join us for an informative conference.',
      extendedDescription: 'This conference is designed to provide valuable insights and networking opportunities. It is suitable for professionals from various industries.',
      image: 'https://farm66.staticflickr.com/65535/51713248807_584698fcd9_b.jpg',
      price: '1500',
      location: 'Kuala Lumpur',
      pax: '500 - 1000',
    },
    {
      title: 'General Workshop',
      description: 'Enhance your skills with our hands-on workshop.',
      extendedDescription: 'Our workshop offers practical training and expert guidance. Whether you are a beginner or an experienced professional, this workshop is for you.',
      image: 'https://assets.entrepreneur.com/content/3x2/2000/20160408164253-leadership-brain-games-play.jpeg',
      price: '800',
      location: 'Petaling Jaya',
      pax: '20 - 30',
    },
    {
      title: 'General Exhibition',
      description: 'Discover the latest trends in our exhibition.',
      extendedDescription: 'Our exhibition showcases a wide range of products and services from various industries. Explore the exhibits and connect with industry leaders.',
      image: 'https://www.worldpm2022.com/wp-content/uploads/2021/05/Exhibition-1024x684.jpg',
      price: '500',
      location: 'Shah Alam',
      pax: '1000+',
    },
    {
      title: 'General Networking Event',
      description: 'Expand your professional network at our networking event.',
      extendedDescription: 'Connect with like-minded professionals, exchange ideas, and explore collaboration opportunities at our networking event.',
      image: 'https://tripleseat.com/wp-content/uploads/2022/08/How-to-Plan-a-Networking-Event.png',
      price: '200',
      location: 'Subang Jaya',
      pax: '50 - 100',
    },
  ];

  async presentModal(event:any,index: number) {
    this.selectedCardIndex = index;

    const modal = await this.modalController.create({
      component: EventModalComponent,
      backdropDismiss: true,
      componentProps: {
        event: event,
      },
    });
  
    await modal.present();
  }

}
