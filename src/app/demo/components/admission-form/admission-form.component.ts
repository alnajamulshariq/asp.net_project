import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FileUploadModule } from 'primeng/fileupload';  // Import FileUploadModule
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-admission-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RadioButtonModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    ToggleButtonModule,
    FileUploadModule,
    ToastModule   // Add FileUploadModule here
  ],
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css'],
  providers:[MessageService]
})
export class AdmissionFormComponent {


  uploadedFiles: any[] = [];


  getData:any[]= [];
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




  valRadio: string = '';
  
 
  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: 'File has been uploaded successfully.' });
  }


  download(formValue: any) {


const doc1 = new jsPDF();

// Set font and size for the SYMPHONY INSTITUTE OF TECHNOLOGY heading
doc1.setFont('helvetica', 'bold');
doc1.setFontSize(20);

// Define the heading text
const heading = "SYMPHONY INSTITUTE OF TECHNOLOGY";

// Calculate the text width and position
const text1Width = doc1.getTextWidth(heading);
const page1Width = doc1.internal.pageSize.width;
const xPosition1 = (page1Width - text1Width) / 2;

// Add the centered heading
doc1.text(heading, xPosition1, 20);

// Set font and size for the Admission Form title
doc1.setFont('helvetica', 'bold');
const formTitle = "Admission Form";
const textWidth = doc1.getTextWidth(formTitle);
const xPosition = (page1Width - textWidth) / 2;

doc1.setFontSize(16);
doc1.text(formTitle, xPosition, 30);

// Add placeholder for passport size photograph
const imageX = 80; // Centered horizontally
const imageY = 40; // Positioned below the title
const imageWidth = 50; // Width of the placeholder
const imageHeight = 50; // Height of the placeholder

// Draw rectangle for the photograph placeholder
doc1.rect(imageX, imageY, imageWidth, imageHeight);
doc1.setFontSize(10);
doc1.text("Passport Size Photo", imageX + 5, imageY + imageHeight / 2);

// Adjust Y position for the table
let currentY = imageY + imageHeight + 10; // Starting Y position below the photo
doc1.setFont('helvetica', 'normal');
doc1.setFontSize(12);

const startX = 14; // Left margin
const rowHeight = 10; // Height of each row
const fieldWidth = 50; // Width for the label column
const valueWidth = 100; // Width for the value column

// Define the fields and values
const fields = [
  { label: "Form Number", value: "10001" }, // Hardcoded Form Number
  { label: "First Name", value: formValue.firstName || "________" },
  { label: "Last Name", value: formValue.lastName || "________" },
  { label: "Father's Name", value: formValue.fatherName || "________" },
  { label: "Email", value: formValue.email || "________" },
  { label: "Age", value: formValue.age.toString() || "________" },
  { label: "Mobile", value: formValue.mobile || "________" },
  { label: "Address", value: formValue.address || "________" },
  { label: "Gender", value: formValue.gender || "________" }
];

// Loop to draw rows and borders
fields.forEach((field) => {
  // Draw border for label
  doc1.rect(startX, currentY, fieldWidth, rowHeight);

  // Draw border for value
  doc1.rect(startX + fieldWidth, currentY, valueWidth, rowHeight);

  // Add label and value text inside the borders
  doc1.text(field.label, startX + 2, currentY + 6);
  doc1.text(field.value, startX + fieldWidth + 2, currentY + 6);

  // Move to the next row
  currentY += rowHeight;
});

// Save the PDF
doc1.save('admission_form.pdf');



    // Second PDF: Challan
    const doc = new jsPDF();
  
    // Function to draw a challan copy
    const drawChallanCopy = (title: string, startY: number) => {
      const leftX = 10;
      const pageWidth = doc.internal.pageSize.width - 20;
      const rowHeight = 8;
      const challanHeight = 70;
      let currentY = startY;
  
      // Draw outer border
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.rect(leftX, currentY, pageWidth, challanHeight);
  
      // Header
      const institutionName = "SYMPHONY";
      doc.text(institutionName, (doc.internal.pageSize.width - doc.getTextWidth(institutionName)) / 2, currentY + 7);
      doc.setFontSize(10);
      doc.text(title, leftX + 4, currentY + 14);
  
      currentY += 20;
  
      // Full-width table
      const fields = [
        { label: "Form Number", value: formValue.formNumber || "10001" },
        { label: "Name", value: formValue.name || "Shariq Najam" },
        { label: "Father Name", value: formValue.fatherName || "Ahmed Ali" },
        { label: "Date", value: formValue.date || "12-01-2025" },
        { label: "Amount", value: "$100" },
        { label: "Due Date", value: formValue.dueDate || "15-01-2025" }
      ];
  
      const columnWidths = [60, pageWidth - 60];
      const tableStartX = leftX;
  
      doc.setFontSize(9);
      fields.forEach((field, index) => {
        const rowY = currentY + index * rowHeight;
  
        // Draw table borders
        doc.rect(tableStartX, rowY, columnWidths[0], rowHeight);
        doc.rect(tableStartX + columnWidths[0], rowY, columnWidths[1], rowHeight);
  
        // Add text
        doc.text(field.label, tableStartX + 2, rowY + 5);
        doc.text(field.value, tableStartX + columnWidths[0] + 2, rowY + 5);
      });
  
      currentY += fields.length * rowHeight;
  
      // Signature lines
      currentY += 6;
      doc.line(tableStartX, currentY, tableStartX + 60, currentY);
      doc.text("Student Signature", tableStartX, currentY + 5);
  
      doc.line(tableStartX + columnWidths[0] + 20, currentY, tableStartX + pageWidth, currentY);
      doc.text("Bank Authorised Signature & Stamp", tableStartX + columnWidths[0] + 20, currentY + 5);
  
      return startY + challanHeight + 10;
    };
  
    // Draw three challan copies
    let startY = 20;
    startY = drawChallanCopy("Bank Copy", startY);
    startY = drawChallanCopy("Finance Copy", startY);
    drawChallanCopy("Student Copy", startY);
  
    // Save the second PDF
    doc.save('challan_form.pdf');
  }
  
}

  

