import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsEventManagementComponent } from './news-event-management/news-event-management.component';
import { AddNewsEventComponent } from './add-news-event/add-news-event.component';
import { EditNewsEventComponent } from './edit-news-event/edit-news-event.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'',component:NewsEventManagementComponent},
    {path:'add',component:AddNewsEventComponent},
    {path:'edit',component:EditNewsEventComponent}
  ])],
  exports: [RouterModule]
})
export class NewsEventManagementRoutingModule { }
