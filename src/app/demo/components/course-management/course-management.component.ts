import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [TableModule,ButtonModule,RouterModule,BreadcrumbModule],
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.scss'
})
export class CourseManagementComponent {
  student:any= [{
    rollNumber: 1001,
    name: 'Shariq Najam',
    fatherName: 'Farhat Hussain',
    result: 'Passed'
  }]
  
  items: MenuItem[] | undefined = [
    { label: 'Course Management' },
];
}
