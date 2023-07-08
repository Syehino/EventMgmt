import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrewListPage } from './crew-list.page';

const routes: Routes = [
  {
    path: '',
    component: CrewListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrewListPageRoutingModule {}
