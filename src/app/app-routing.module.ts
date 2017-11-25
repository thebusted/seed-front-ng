import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent, NotfoundLayoutComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      },
      {
        path: 'schedule',
        loadChildren: './views/schedule/schedule.module#ScheduleModule'
      },
      {
        path: 'topics',
        loadChildren: './views/topics/topics.module#TopicsModule'
      },
      {
        path: 'contact',
        loadChildren: './views/contact/contact.module#ContactModule'
      }
    ]
  },
  {
    path: '**',
    component: NotfoundLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
