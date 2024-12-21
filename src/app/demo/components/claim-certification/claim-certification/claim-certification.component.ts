import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-claim-certification',
  standalone: true,
  imports: [ButtonModule,TableModule,TooltipModule],
  templateUrl: './claim-certification.component.html',
  styleUrl: './claim-certification.component.scss'
})
export class ClaimCertificationComponent {
  student:any= [{
    rollNumber: 1001,
    name: 'Shariq Najam',
    fatherName: 'Farhat Hussain',
    result: 'Passed'
  }]
}
