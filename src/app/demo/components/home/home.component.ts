import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router){}
  navigateToNewCourses() {
    this.router.navigate(['/courses'], { fragment: 'new-courses' });
  }
  navigateToShortCourses() {
    this.router.navigate(['/courses'], { fragment: 'short-courses' });
  }
  navigateToLabs(){
    this.router.navigate(['/courses'], { fragment: 'lab' });
  }
}
