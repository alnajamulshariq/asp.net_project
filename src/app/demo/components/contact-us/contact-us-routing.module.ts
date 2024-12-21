import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'',
    component:ContactUsComponent
    }
  ])],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
