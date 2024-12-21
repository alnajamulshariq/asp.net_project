import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-finance-management',
  standalone: true,
  imports: [FormsModule,ButtonModule],
  templateUrl: './finance-management.component.html',
  styleUrl: './finance-management.component.scss'
})
export class FinanceManagementComponent {
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
