import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-branch',
  standalone: true,
  imports: [BreadcrumbModule,FormsModule,ButtonModule],
  templateUrl: './edit-branch.component.html',
  styleUrl: './edit-branch.component.scss'
})
export class EditBranchComponent {
  items: MenuItem[] | undefined = [
    { label: 'Branch Management',routerLink:'/branch-management' },
    { label: 'Edit Branch' },
];

onSubmit(data:any, MyForm: NgForm)
  {
    if(MyForm.valid)
    {
      // this.getData.push(data);
      console.log(data);
      // this.resetForm(MyForm);
    }
  }
  
  resetForm(MyForm: NgForm)
  {
    MyForm.form.reset();
  }
}
