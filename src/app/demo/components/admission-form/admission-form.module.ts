import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionFormRoutingModule } from './admission-form-routing.module';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import {AdmissionFormComponent} from './admission-form.component'
@NgModule({
 
  imports: [
    CommonModule,
    AdmissionFormRoutingModule,
    FormsModule,
    RadioButtonModule,
    FileUploadModule,
    AdmissionFormComponent
  ]
})
export class AdmissionFormModule { }
