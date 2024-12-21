import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'],visible:true },
                    { label: 'Admission Form', icon: 'bx bx-edit-alt', routerLink: ['/admission-form'],visible:true },
                    { label: 'Entrance Test', icon: 'bx bx-clipboard', routerLink: ['/entrance-test'],visible:true},
                    { label: 'Courses', icon: 'pi pi-book', routerLink: ['/courses'],visible:true },
                    { label: 'News & Events', icon: 'pi pi-bell', routerLink: ['/news-events'],visible:true },
                    { label: 'Payments', icon: 'pi pi-wallet', routerLink: ['/payments'],visible:true },
                    { label: 'FAQs', icon: 'pi pi-question-circle', routerLink: ['/faqs'],visible:true },
                    { label: 'User Profile', icon: 'pi pi-user', routerLink: ['/user-profile'],visible:true },
                    { label: 'Contact Us', icon: 'pi pi-phone', routerLink: ['/contact-us'],visible:true },
                    { label: 'About', icon: 'pi pi-info-circle', routerLink: ['/about'],visible:true },
                    { label: 'Course Management', icon: 'bx bxs-book-add', routerLink: ['/course-management'],visible:true },
                    { label: 'Faqs Management', icon: 'pi pi-question-circle', routerLink: ['/faqs-management'],visible:true },
                    { label: 'News & Event Management', icon: 'pi pi-bell', routerLink: ['/news-event-management'],visible:true },
                    { label: 'Branch Management', icon: 'bx bx-git-branch', routerLink: ['/branch-management'],visible:true },
                    { label: 'About Management', icon: 'pi pi-info-circle', routerLink: ['/update-about-content-management'],visible:true },
                    { label: 'Result Management', icon: 'bx bx-spreadsheet', routerLink: ['/result-management'],visible:true },
                    { label: 'Entrance Exam Management', icon: 'bx bx-clipboard', routerLink: ['/entrance-exam-management'],visible:true },
                    { label: 'Finance Management', icon: 'bx bx-money-withdraw', routerLink: ['/finance-management'],visible:true },
                    { label: 'Claim Certification', icon: 'bx bx-medal', routerLink: ['/claim-certification-management'],visible:true },
                    { label: 'Certification Management', icon: 'bx bx-medal', routerLink: ['/certification-management'],visible:true },
                ]
            }
        ];
    }
}