import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementComponent } from './course-management.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
          path:'',
        component:CourseManagementComponent
    },
    {
      path:'add',
    component:AddCourseComponent
    },
    {
      path:'edit',
    component:UpdateCourseComponent
}
  ])],
  exports: [RouterModule]
})
export class CourseManagementRoutingModule { }
