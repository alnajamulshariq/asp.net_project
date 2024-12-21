import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from './faqs.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'',
    component:FaqsComponent
    }
  ])],
  exports: [RouterModule]
})
export class FaqsRoutingModule { }
