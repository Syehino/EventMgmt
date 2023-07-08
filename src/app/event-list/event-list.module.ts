import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventListPageRoutingModule } from './event-list-routing.module';

import { EventListPage } from './event-list.page';
import { EventModalComponent } from '../event-modal/event-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventListPageRoutingModule
  ],
  declarations: [EventListPage, EventModalComponent],
})
export class EventListPageModule {}
