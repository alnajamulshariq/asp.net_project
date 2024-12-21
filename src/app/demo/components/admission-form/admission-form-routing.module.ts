import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionFormComponent } from './admission-form.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AdmissionFormComponent }
])],
  exports: [RouterModule]
})
export class AdmissionFormRoutingModule { }
