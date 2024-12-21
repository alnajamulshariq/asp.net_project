import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAboutContantComponent } from './update-about-contant/update-about-contant.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([{
    path:'',component:UpdateAboutContantComponent
  }])],
  exports: [RouterModule]
})
export class AboutContentManagementRoutingModule { }
