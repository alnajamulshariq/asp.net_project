import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimCertificationComponent } from './claim-certification/claim-certification.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path:'', component: ClaimCertificationComponent}
    ]
  )],
  exports: [RouterModule]
})
export class ClaimCertificationRoutingModule { }
