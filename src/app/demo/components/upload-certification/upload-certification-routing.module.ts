import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationManagementComponent } from './certification-management/certification-management.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { EditCertificationComponent } from './edit-certification/edit-certification.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'',component:CertificationManagementComponent},
    {path:'add',component:AddCertificationComponent},
    {path:'edit',component:EditCertificationComponent},
  ])],
  exports: [RouterModule]
})
export class UploadCertificationRoutingModule { }
