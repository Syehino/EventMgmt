import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {

  constructor(private http: HttpClient,private modalController: ModalController) { }

  ngOnInit() {
    this.loadEvents();
  }

  selectedCardIndex: number = -1;

  events: any[] = [];

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

  loadEvents() {
    const apiUrl = 'https://syednazirul-organic-lamp-pjrjwrjgqp6f69p4-3000.preview.app.github.dev/api/events'; // Replace with your API endpoint
    const authHeader = new HttpHeaders().set('X-Github-Token', 'ghu_u9qVyiQ6d5ISXKzzO6KmnmKlXhM7b91cbLSn');
    this.http.get<any[]>(apiUrl, {headers: authHeader})
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError('Error occurred while fetching events.'); // Customize the error message as needed
        })
      )
      .subscribe((response) => {
        this.events = response;
      });
    }

}
