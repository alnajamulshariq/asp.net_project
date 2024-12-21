import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-entrance-test',
  standalone: true,
  imports: [ButtonModule,TableModule,CommonModule],
  templateUrl: './entrance-test.component.html',
  styleUrls: ['./entrance-test.component.css'],
})
export class EntranceTestComponent {
  constructor(private router: Router) {}
  navigateToForm() {
    this.router.navigate(['/admission-form']);
  }

  student:any= [{
    rollNumber: 1001,
    name: 'Shariq Najam',
    fatherName: 'Farhat Hussain',
    result: 'Passed'
  }]

  downloadAdmitCard(formValue:any){
    const doc1 = new jsPDF();

// Set font and size for the SYMPHONY LIMITED heading
doc1.setFont('helvetica', 'bold');
doc1.setFontSize(20);

// Define the heading text
const heading = "SYMPHONY LIMITED";

// Calculate the text width and position for centering
const text1Width = doc1.getTextWidth(heading);
const page1Width = doc1.internal.pageSize.width;
const xPosition1 = (page1Width - text1Width) / 2;

// Add the centered heading
doc1.text(heading, xPosition1, 20);

// Set font and size for the Admit Card title
doc1.setFont('helvetica', 'bold');
const formTitle = "Admit Card";
const textWidth = doc1.getTextWidth(formTitle);
const xPosition = (page1Width - textWidth) / 2;

// Add Admit Card title below the heading
doc1.setFontSize(16);
doc1.text(formTitle, xPosition, 30);

// Add form details with borders and margins
doc1.setFont('helvetica', 'normal');
doc1.setFontSize(12);

// Starting positions
const startX = 14; // Left margin
let currentY = 40; // Starting Y position for the form fields
const rowHeight = 10; // Height of each row
const fieldWidth = 50; // Width for the label column
const valueWidth = 100; // Width for the value column

// Form fields array
const fields = [
  { label: "Roll Number", value: "10001" }, // Hardcoded Roll Number
  { label: "Form Number", value: "10001" }, // Hardcoded Form Number
  { label: "First Name", value: formValue.firstName || "________" },
  { label: "Last Name", value: formValue.lastName || "________" },
  { label: "Father's Name", value: formValue.fatherName || "________" },
  { label: "Email", value: formValue.email || "________" },
  { label: "Age", value: formValue.age ? formValue.age.toString() : "________" },
  { label: "Mobile", value: formValue.mobile || "________" },
  { label: "Address", value: formValue.address || "________" },
  { label: "Gender", value: formValue.gender || "________" }
];

// Loop to draw rows and borders for the fields
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

// Save the PDF file
doc1.save('admit_card.pdf');

  }



}