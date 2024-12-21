import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'',
    component:AboutComponent
    }
  ])],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
