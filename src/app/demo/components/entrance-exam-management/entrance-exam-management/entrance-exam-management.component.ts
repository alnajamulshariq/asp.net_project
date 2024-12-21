import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-entrance-exam-management',
  standalone: true,
  imports: [FormsModule,ButtonModule],
  templateUrl: './entrance-exam-management.component.html',
  styleUrl: './entrance-exam-management.component.scss'
})
export class EntranceExamManagementComponent {

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
