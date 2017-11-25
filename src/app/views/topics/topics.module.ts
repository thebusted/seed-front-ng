import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';

@NgModule({
  imports: [
    CommonModule,
    TopicsRoutingModule
  ],
  declarations: [TopicsComponent]
})
export class TopicsModule { }
