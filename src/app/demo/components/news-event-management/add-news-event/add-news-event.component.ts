import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-news-event',
  standalone: true,
  imports: [BreadcrumbModule,FormsModule,ButtonModule],
  templateUrl: './add-news-event.component.html',
  styleUrl: './add-news-event.component.scss'
})
export class AddNewsEventComponent {
  items: MenuItem[] | undefined = [
    { label: 'News & Events Management',routerLink:'/news-event-management' },
    { label: 'Add News & Events' },
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
