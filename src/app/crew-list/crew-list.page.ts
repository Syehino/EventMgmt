import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrewModalComponent } from '../crew-modal/crew-modal.component';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';


const APIUrl = environment.apiURL;
const endpoint = '/crews';
const apiEndpoint = APIUrl + endpoint;

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.page.html',
  styleUrls: ['./crew-list.page.scss'],
})
export class CrewListPage implements OnInit {

  constructor(private http: HttpClient, private modalController: ModalController) { }

  ngOnInit() {
    this.loadCrews();
  }

  selectedCardIndex: number = -1;

  crews: any[] = [];
  selectedCrew: any[] = [];

  async presentModal(crew:any,index: number) {
    this.selectedCardIndex = index;

    const modal = await this.modalController.create({
      component: CrewModalComponent,
      backdropDismiss: true,
      componentProps: {
        crew: crew,
        selectedCrew: this.selectedCrew,
      },
    });
  
    await modal.present();
  }

  loadCrews() {
    const apiUrl = apiEndpoint; // Replace with your API endpoint
    this.http.get<any[]>(apiUrl)
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError('Error occurred while fetching events.'); // Customize the error message as needed
        })
      )
      .subscribe((response) => {
        this.crews = response;
      });
    }


}
