import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultManagementComponent } from './result-management/result-management.component';
import { AddResultComponent } from './add-result/add-result.component';
import { EditResultComponent } from './edit-result/edit-result.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path:'', component:ResultManagementComponent},
      {path:'add', component:AddResultComponent},
      {path:'edit', component:EditResultComponent},
    ]
  )],
  exports: [RouterModule]
})
export class ResultManagementRoutingModule { }
