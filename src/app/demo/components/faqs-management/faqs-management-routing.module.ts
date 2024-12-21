import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsManagementsComponent } from './faqs-managements/faqs-managements.component';
import { AddFaqsComponent } from './add-faqs/add-faqs.component';
import { EditFaqsComponent } from './edit-faqs/edit-faqs.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [{path:'',component: FaqsManagementsComponent},
      {path:'add', component:AddFaqsComponent},
      {path:'edit', component:EditFaqsComponent},
    ]
  )],
  exports: [RouterModule]
})
export class FaqsManagementRoutingModule { }
