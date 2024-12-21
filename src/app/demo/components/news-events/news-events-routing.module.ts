import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsEventsComponent } from './news-events.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'',
      component:NewsEventsComponent
    }
  ])],
  exports: [RouterModule]
})
export class NewsEventsRoutingModule { }
