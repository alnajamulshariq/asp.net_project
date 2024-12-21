import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceExamManagementComponent } from './entrance-exam-management/entrance-exam-management.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'', component: EntranceExamManagementComponent}
  ])],
  exports: [RouterModule]
})
export class EntranceExamManagementRoutingModule { }
