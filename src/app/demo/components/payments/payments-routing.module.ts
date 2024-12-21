import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'',
    component:PaymentsComponent
    }
  ])],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
