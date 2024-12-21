import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  downloadBasicCourseChallan(){
    const doc = new jsPDF();

    // Function to draw a challan copy
    const drawChallanCopy = (title, startY) => {
        const leftX = 10;
        const pageWidth = doc.internal.pageSize.width - 20;
        const rowHeight = 6; // Reduced row height
        const challanHeight = 60; // Reduced challan height
        let currentY = startY;

        // Draw outer border
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10); // Reduced font size
        doc.rect(leftX, currentY, pageWidth, challanHeight);

        // Header
        const institutionName = "SYMPHONY (for basic course)";
        const headerY = currentY + 8;
        doc.text(
            institutionName,
            (doc.internal.pageSize.width - doc.getTextWidth(institutionName)) / 2,
            headerY
        );
        doc.setFontSize(8); // Reduced font size for title
        doc.text(title, leftX + 4, headerY + 6);

        currentY += 18;

        // Full-width table
        const fields = [
            { label: "Form Number", value: "__________" },
            { label: "Name", value: "__________" },
            { label: "Father Name", value: "__________" },
            { label: "Date", value: "__________" },
            { label: "Basic Course fee", value: "$4275" },
            { label: "Total Amount", value: "$4275" },
            { label: "Due Date", value: "__________" },
        ];

        const columnWidths = [60, pageWidth - 60];
        const tableStartX = leftX;

        doc.setFontSize(7); // Further reduced font size for table
        fields.forEach((field, index) => {
            const rowY = currentY + index * rowHeight;

            // Draw table borders
            doc.rect(tableStartX, rowY, columnWidths[0], rowHeight);
            doc.rect(tableStartX + columnWidths[0], rowY, columnWidths[1], rowHeight);

            // Add text
            doc.text(field.label, tableStartX + 2, rowY + 4);
            doc.text(field.value, tableStartX + columnWidths[0] + 2, rowY + 4);
        });

        currentY += fields.length * rowHeight + 4;

        // Signature lines
        doc.line(tableStartX, currentY, tableStartX + 60, currentY);
        doc.text("Student Signature", tableStartX, currentY + 4);

        doc.line(
            tableStartX + columnWidths[0] + 20,
            currentY,
            tableStartX + pageWidth,
            currentY
        );
        doc.text(
            "Bank Authorised Signature & Stamp",
            tableStartX + columnWidths[0] + 22,
            currentY + 4
        );

        // Add margin after table
        return currentY + 12; // Additional margin for spacing
    };

    // Draw three challan copies
    let startY = 15; // Adjusted initial position for more top margin
    startY = drawChallanCopy("Bank Copy", startY);
    startY = drawChallanCopy("Finance Copy", startY);
    drawChallanCopy("Student Copy", startY);

    // Save the PDF
    doc.save("challan.pdf");
        
  }

  downloadAdvanceCourseChallan(){
    const doc = new jsPDF();

    // Function to draw a challan copy
    const drawChallanCopy = (title, startY) => {
        const leftX = 10;
        const pageWidth = doc.internal.pageSize.width - 20;
        const rowHeight = 6; // Reduced row height
        const challanHeight = 60; // Reduced challan height
        let currentY = startY;

        // Draw outer border
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10); // Reduced font size
        doc.rect(leftX, currentY, pageWidth, challanHeight);

        // Header
        const institutionName = "SYMPHONY (for advance course)";
        const headerY = currentY + 8;
        doc.text(
            institutionName,
            (doc.internal.pageSize.width - doc.getTextWidth(institutionName)) / 2,
            headerY
        );
        doc.setFontSize(8); // Reduced font size for title
        doc.text(title, leftX + 4, headerY + 6);

        currentY += 18;

        // Full-width table
        const fields = [
            { label: "Form Number", value: "__________" },
            { label: "Name", value: "__________" },
            { label: "Father Name", value: "__________" },
            { label: "Date", value: "__________" },
            { label: "Advance Course fee", value: "$6000" },
            { label: "Total Amount", value: "$6000" },
            { label: "Due Date", value: "__________" },
        ];

        const columnWidths = [60, pageWidth - 60];
        const tableStartX = leftX;

        doc.setFontSize(7); // Further reduced font size for table
        fields.forEach((field, index) => {
            const rowY = currentY + index * rowHeight;

            // Draw table borders
            doc.rect(tableStartX, rowY, columnWidths[0], rowHeight);
            doc.rect(tableStartX + columnWidths[0], rowY, columnWidths[1], rowHeight);

            // Add text
            doc.text(field.label, tableStartX + 2, rowY + 4);
            doc.text(field.value, tableStartX + columnWidths[0] + 2, rowY + 4);
        });

        currentY += fields.length * rowHeight + 4;

        // Signature lines
        doc.line(tableStartX, currentY, tableStartX + 60, currentY);
        doc.text("Student Signature", tableStartX, currentY + 4);

        doc.line(
            tableStartX + columnWidths[0] + 20,
            currentY,
            tableStartX + pageWidth,
            currentY
        );
        doc.text(
            "Bank Authorised Signature & Stamp",
            tableStartX + columnWidths[0] + 22,
            currentY + 4
        );

        // Add margin after table
        return currentY + 12; // Additional margin for spacing
    };

    // Draw three challan copies
    let startY = 15; // Adjusted initial position for more top margin
    startY = drawChallanCopy("Bank Copy", startY);
    startY = drawChallanCopy("Finance Copy", startY);
    drawChallanCopy("Student Copy", startY);

    // Save the PDF
    doc.save("challan.pdf");
  }


  downloadLabFeeChallan(){
    const doc = new jsPDF();

    // Function to draw a challan copy
    const drawChallanCopy = (title, startY) => {
        const leftX = 10;
        const pageWidth = doc.internal.pageSize.width - 20;
        const rowHeight = 6; // Reduced row height
        const challanHeight = 60; // Reduced challan height
        let currentY = startY;

        // Draw outer border
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10); // Reduced font size
        doc.rect(leftX, currentY, pageWidth, challanHeight);

        // Header
        const institutionName = "SYMPHONY (for lab)";
        const headerY = currentY + 8;
        doc.text(
            institutionName,
            (doc.internal.pageSize.width - doc.getTextWidth(institutionName)) / 2,
            headerY
        );
        doc.setFontSize(8); // Reduced font size for title
        doc.text(title, leftX + 4, headerY + 6);

        currentY += 18;

        // Full-width table
        const fields = [
            { label: "Form Number", value: "__________" },
            { label: "Name", value: "__________" },
            { label: "Father Name", value: "__________" },
            { label: "Date", value: "__________" },
            { label: "Lab fee", value: "$1000" },
            { label: "Total Amount", value: "$1000" },
            { label: "Due Date", value: "__________" },
        ];

        const columnWidths = [60, pageWidth - 60];
        const tableStartX = leftX;

        doc.setFontSize(7); // Further reduced font size for table
        fields.forEach((field, index) => {
            const rowY = currentY + index * rowHeight;

            // Draw table borders
            doc.rect(tableStartX, rowY, columnWidths[0], rowHeight);
            doc.rect(tableStartX + columnWidths[0], rowY, columnWidths[1], rowHeight);

            // Add text
            doc.text(field.label, tableStartX + 2, rowY + 4);
            doc.text(field.value, tableStartX + columnWidths[0] + 2, rowY + 4);
        });

        currentY += fields.length * rowHeight + 4;

        // Signature lines
        doc.line(tableStartX, currentY, tableStartX + 60, currentY);
        doc.text("Student Signature", tableStartX, currentY + 4);

        doc.line(
            tableStartX + columnWidths[0] + 20,
            currentY,
            tableStartX + pageWidth,
            currentY
        );
        doc.text(
            "Bank Authorised Signature & Stamp",
            tableStartX + columnWidths[0] + 22,
            currentY + 4
        );

        // Add margin after table
        return currentY + 12; // Additional margin for spacing
    };

    // Draw three challan copies
    let startY = 15; // Adjusted initial position for more top margin
    startY = drawChallanCopy("Bank Copy", startY);
    startY = drawChallanCopy("Finance Copy", startY);
    drawChallanCopy("Student Copy", startY);

    // Save the PDF
    doc.save("challan.pdf");
  }


  
  


  downloadLabFeeWithCourseChallan() {
    const doc = new jsPDF();

    // Function to draw a challan copy
    const drawChallanCopy = (title, startY) => {
        const leftX = 10;
        const pageWidth = doc.internal.pageSize.width - 20;
        const rowHeight = 6; // Reduced row height
        const challanHeight = 60; // Reduced challan height
        let currentY = startY;

        // Draw outer border
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10); // Reduced font size
        doc.rect(leftX, currentY, pageWidth, challanHeight);

        // Header
        const institutionName = "SYMPHONY (for course with lab)";
        const headerY = currentY + 8;
        doc.text(
            institutionName,
            (doc.internal.pageSize.width - doc.getTextWidth(institutionName)) / 2,
            headerY
        );
        doc.setFontSize(8); // Reduced font size for title
        doc.text(title, leftX + 4, headerY + 6);

        currentY += 18;

        // Full-width table
        const fields = [
            { label: "Form Number", value: "__________" },
            { label: "Name", value: "__________" },
            { label: "Father Name", value: "__________" },
            { label: "Date", value: "__________" },
            { label: "Lab Fee", value: "$1500" },
            { label: "Advance Course fee", value: "$6000" },
            { label: "Total Amount", value: "$7500" },
            { label: "Due Date", value: "__________" },
        ];

        const columnWidths = [60, pageWidth - 60];
        const tableStartX = leftX;

        doc.setFontSize(7); // Further reduced font size for table
        fields.forEach((field, index) => {
            const rowY = currentY + index * rowHeight;

            // Draw table borders
            doc.rect(tableStartX, rowY, columnWidths[0], rowHeight);
            doc.rect(tableStartX + columnWidths[0], rowY, columnWidths[1], rowHeight);

            // Add text
            doc.text(field.label, tableStartX + 2, rowY + 4);
            doc.text(field.value, tableStartX + columnWidths[0] + 2, rowY + 4);
        });

        currentY += fields.length * rowHeight + 4;

        // Signature lines
        doc.line(tableStartX, currentY, tableStartX + 60, currentY);
        doc.text("Student Signature", tableStartX, currentY + 4);

        doc.line(
            tableStartX + columnWidths[0] + 20,
            currentY,
            tableStartX + pageWidth,
            currentY
        );
        doc.text(
            "Bank Authorised Signature & Stamp",
            tableStartX + columnWidths[0] + 22,
            currentY + 4
        );

        // Add margin after table
        return currentY + 12; // Additional margin for spacing
    };

    // Draw three challan copies
    let startY = 15; // Adjusted initial position for more top margin
    startY = drawChallanCopy("Bank Copy", startY);
    startY = drawChallanCopy("Finance Copy", startY);
    drawChallanCopy("Student Copy", startY);

    // Save the PDF
    doc.save("challan.pdf");
}

}
