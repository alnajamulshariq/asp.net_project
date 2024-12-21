import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent {
    // Array to track which FAQ is expanded (active)
    activeFaqIndex: number | null = null;

    // Method to toggle the active FAQ
    toggleActive(index: number): void {
      if (this.activeFaqIndex === index) {
        this.activeFaqIndex = null; // Close if the same FAQ is clicked again
      } else {
        this.activeFaqIndex = index; // Open the clicked FAQ
      }
    }
  
}


