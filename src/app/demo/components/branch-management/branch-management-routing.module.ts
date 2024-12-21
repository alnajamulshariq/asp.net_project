import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchManagementComponent } from './branch-management/branch-management.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path:'', component:BranchManagementComponent},
      {path:'add', component:AddBranchComponent},
      {path:'edit', component:EditBranchComponent},

    ]
  )],
  exports: [RouterModule]
})
export class BranchManagementRoutingModule { }
