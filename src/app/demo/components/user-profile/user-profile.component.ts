import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FileUploadModule } from 'primeng/fileupload';  // Import FileUploadModule
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,RadioButtonModule,ButtonModule,RippleModule,SplitButtonModule,ToggleButtonModule,FileUploadModule],
  templateUrl: './user-profile.component.html',
  providers:[MessageService],
  styleUrls:['./user-profile.component.scss']
})
export class UserProfileComponent {
  valRadio: string = '';
    uploadedFiles: any[] = [];
   
    constructor(private messageService: MessageService) {}
  
    onUpload(event: any) {
      for (const file of event.files) {
        this.uploadedFiles.push(file);
      }
  
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }
  }
