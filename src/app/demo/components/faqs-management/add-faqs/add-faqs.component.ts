import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-add-faqs',
  standalone: true,
  imports: [BreadcrumbModule,FormsModule,ButtonModule],
  templateUrl: './add-faqs.component.html',
  styleUrl: './add-faqs.component.scss'
})
export class AddFaqsComponent {
  items: MenuItem[] | undefined = [
    { label: 'FAQs Management',routerLink:'/faqs-management' },
    { label: 'Add FAQs' },
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
