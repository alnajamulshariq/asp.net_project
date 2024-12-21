import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-result',
  standalone: true,
  imports: [BreadcrumbModule,FormsModule,ButtonModule],
  templateUrl: './edit-result.component.html',
  styleUrl: './edit-result.component.scss'
})
export class EditResultComponent {
  items: MenuItem[] | undefined = [
    { label: 'Result Management',routerLink:'/result-management' },
    { label: 'Edit Result' },
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
