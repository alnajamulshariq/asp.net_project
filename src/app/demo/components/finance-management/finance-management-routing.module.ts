import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceManagementComponent } from './finance-management/finance-management.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path: '', component: FinanceManagementComponent}
    ]
  )],
  exports: [RouterModule]
})
export class FinanceManagementRoutingModule { }
