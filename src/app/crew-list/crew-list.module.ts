import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrewListPageRoutingModule } from './crew-list-routing.module';

import { CrewListPage } from './crew-list.page';
import { CrewModalComponent } from '../crew-modal/crew-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrewListPageRoutingModule
  ],
  declarations: [CrewListPage, CrewModalComponent]
})
export class CrewListPageModule {}
