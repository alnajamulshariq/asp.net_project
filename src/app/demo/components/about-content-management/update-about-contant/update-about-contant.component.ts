import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-update-about-contant',
  standalone: true,
  imports: [FormsModule,ButtonModule],
  templateUrl: './update-about-contant.component.html',
  styleUrl: './update-about-contant.component.scss'
})
export class UpdateAboutContantComponent {
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
