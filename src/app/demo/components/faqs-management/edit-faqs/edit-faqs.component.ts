import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-edit-faqs',
  standalone: true,
  imports: [BreadcrumbModule,FormsModule,ButtonModule],
  templateUrl: './edit-faqs.component.html',
  styleUrl: './edit-faqs.component.scss'
})
export class EditFaqsComponent {
  items: MenuItem[] | undefined = [
    { label: 'FAQs Management',routerLink:'/faqs-management' },
    { label: 'Edit FAQs' },
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
