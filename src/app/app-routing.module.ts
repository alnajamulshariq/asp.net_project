import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/home/home-routing.module').then(m => m.HomeRoutingModule) },
                    { path: 'home', loadChildren: () => import('./demo/components/home/home-routing.module').then(m => m.HomeRoutingModule) },
                    { path: 'admission-form', loadChildren: () => import('./demo/components/admission-form/admission-form-routing.module').then(m => m.AdmissionFormRoutingModule) },
                    { path: 'entrance-test', loadChildren: () => import('./demo/components/entrance-test/entrance-test-routing.module').then(m => m.EntranceTestRoutingModule) },
                    { path: 'courses', loadChildren: () => import('./demo/components/courses/courses-routing.module').then(m => m.CoursesRoutingModule) },
                    { path: 'news-events', loadChildren: () => import('./demo/components/news-events/news-events-routing.module').then(m => m.NewsEventsRoutingModule) },
                    { path: 'payments', loadChildren: () => import('./demo/components/payments/payments-routing.module').then(m => m.PaymentsRoutingModule) },
                    { path: 'faqs', loadChildren: () => import('./demo/components/faqs/faqs-routing.module').then(m => m.FaqsRoutingModule) },
                    { path: 'user-profile', loadChildren: () => import('./demo/components/user-profile/user-profile-routing.module').then(m => m.UserProfileRoutingModule) },
                    { path: 'contact-us', loadChildren: () => import('./demo/components/contact-us/contact-us-routing.module').then(m => m.ContactUsRoutingModule) },
                    { path: 'about', loadChildren: () => import('./demo/components/about/about-routing.module').then(m => m.AboutRoutingModule) },
                    { path: 'course-management', loadChildren: () => import('./demo/components/course-management/course-management.module').then(m => m.CourseManagementModule) },
                    { path: 'faqs-management', loadChildren: () => import('./demo/components/faqs-management/faqs-management.module').then(m => m.FaqsManagementModule) },
                    { path: 'news-event-management', loadChildren: () => import('./demo/components/news-event-management/news-event-management.module').then(m => m.NewsEventManagementModule) },
                    { path: 'branch-management', loadChildren: () => import('./demo/components/branch-management/branch-management.module').then(m => m.BranchManagementModule) },
                    { path: 'update-about-content-management', loadChildren: () => import('./demo/components/about-content-management/about-content-management.module').then(m => m.AboutContentManagementModule) },
                    { path: 'result-management', loadChildren: () => import('./demo/components/result-management/result-management.module').then(m => m.ResultManagementModule) },
                    { path: 'entrance-exam-management', loadChildren: () => import('./demo/components/entrance-exam-management/entrance-exam-management.module').then(m => m.EntranceExamManagementModule) },
                    { path: 'finance-management', loadChildren: () => import('./demo/components/finance-management/finance-management.module').then(m => m.FinanceManagementModule) },
                    { path: 'claim-certification-management', loadChildren: () => import('./demo/components/claim-certification/claim-certification.module').then(m => m.ClaimCertificationModule) },
                    { path: 'certification-management', loadChildren: () => import('./demo/components/upload-certification/upload-certification.module').then(m => m.UploadCertificationModule) },



                    
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
