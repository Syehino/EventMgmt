import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'event-list',
        loadChildren: () => import('../event-list/event-list.module').then(m => m.EventListPageModule)
      },
      {
        path: 'crew-list',
        loadChildren: () => import('../crew-list/crew-list.module').then(m => m.CrewListPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/event-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/event-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
