import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'',
      component: CoursesComponent
    }
  ])],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
