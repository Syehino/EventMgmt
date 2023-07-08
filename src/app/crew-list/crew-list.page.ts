import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrewModalComponent } from '../crew-modal/crew-modal.component';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.page.html',
  styleUrls: ['./crew-list.page.scss'],
})
export class CrewListPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  crews: any[] = [
    {
      title: 'Caterer',
      description: 'Need a caterer for your event? We have the best caterer in town.',
      extendedDescription: 'Our professional caterers offer a wide range of delectable menus to suit any occasion. From exquisite appetizers to mouthwatering main courses and delightful desserts, we guarantee a culinary experience that will leave your guests impressed.',
      image: 'https://www.legumes.com.my/images/about-1.jpg',
      price: '200',
      location: 'Subang Jaya',
      pax: '50 - 100',
    },
    {
      title: 'Photographer',
      description: 'Capture the special moments with our professional photographers.',
      extendedDescription: 'Our talented photographers have a keen eye for detail and a knack for capturing the essence of every moment. Whether it\'s a wedding, corporate event, or any other occasion, we will ensure that your memories are beautifully preserved.',
      image: 'https://media.istockphoto.com/id/1040613350/photo/photographer-working-with-his-team-during-a-photo-shoot-in-a-studio.jpg?s=612x612&w=0&k=20&c=JYrflSBTSF0BOhuA4_uZzOPmMnvdbxfn-2_GLDnanbc=',
      price: '500',
      location: 'Kuala Lumpur',
      pax: '1 - 2',
    },
    {
      title: 'DJ',
      description: 'Get the party started with our talented DJs.',
      extendedDescription: 'Our experienced DJs know how to read the crowd and create an electrifying atmosphere. With a vast collection of music spanning various genres, we will keep your guests on their feet, dancing all night long.',
      image: 'https://static.wixstatic.com/media/9f8656_577e1def3405446899cd6c2436b2e2b5~mv2.jpg/v1/fill/w_2725,h_1966,al_c,q_90/AIME%20MCEC%202022%20-%20NICO-min_edited.jpg',
      price: '300',
      location: 'Petaling Jaya',
      pax: '100+',
    },
    {
      title: 'Decorator',
      description: 'Transform your event venue with our creative decorators.',
      extendedDescription: 'Our team of skilled decorators will bring your vision to life and create a stunning ambiance for your event. From elegant floral arrangements to captivating lighting designs, we pay attention to every detail to ensure a visually captivating experience.',
      image: 'https://remodelmm.com/wp-content/uploads/2016/10/c700x420.jpg',
      price: '400',
      location: 'Shah Alam',
      pax: 'N/A',
    },
    {
      title: 'Emcee',
      description: 'Engage your audience with our charismatic emcees.',
      extendedDescription: 'Our charismatic emcees have the ability to captivate audiences of all sizes. With their exceptional communication skills and entertaining presence, they will keep your event flowing smoothly and leave a lasting impression on your guests.',
      image: 'https://www.dfdcreations.com.my/wp-content/uploads/2016/07/Emcee-9-800x600.jpg',
      price: '250',
      location: 'Cheras',
      pax: 'N/A',
    },
    {
      title: 'Security',
      description: 'Ensure the safety of your event with our professional security team.',
      extendedDescription: 'Our highly trained security personnel will provide a safe and secure environment for your event. With their expertise in crowd management and emergency response, you can have peace of mind and focus on enjoying your event.',
      image: 'https://internationalsecurityjournal.com/wp-content/uploads/2020/12/shutterstock_1114217537.jpg',
      price: '150',
      location: 'Puchong',
      pax: 'N/A',
    },
  ];

  selectedCardIndex: number = -1;

  async presentModal(crew:any,index: number) {
    this.selectedCardIndex = index;

    const modal = await this.modalController.create({
      component: CrewModalComponent,
      backdropDismiss: true,
      componentProps: {
        crew: crew,
      },
    });
  
    await modal.present();
  }

}
