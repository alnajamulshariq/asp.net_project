import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-certification-management',
  standalone: true,
  imports: [TableModule,ButtonModule,RouterModule,BreadcrumbModule],
  templateUrl: './certification-management.component.html',
  styleUrl: './certification-management.component.scss'
})
export class CertificationManagementComponent {
  student:any= [{
    rollNumber: 1001,
    name: 'Shariq Najam',
    fatherName: 'Farhat Hussain',
    result: 'Passed'
  }]
  
  items: MenuItem[] | undefined = [
    { label: 'Certification Management' },
];
}
