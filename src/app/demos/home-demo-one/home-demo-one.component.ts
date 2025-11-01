import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { HireMeComponent } from '../../common/hire-me/hire-me.component';
import { ContactComponent } from '../../common/contact/contact.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { DigitalMarketerBannerComponent } from '../../common/banners/digital-marketer-banner/digital-marketer-banner.component';
import { DigitalMarketerAboutComponent } from '../../common/abouts/digital-marketer-about/digital-marketer-about.component';
import { DigitalMarketerServicesComponent } from '../../common/services/digital-marketer-services/digital-marketer-services.component';
import { BlogsComponent } from '../../common/blogs/blogs.component';
import { ActivitiesComponent } from '../../common/works/activities.component';

@Component({
    selector: 'rlc-home-demo-one',
    imports: [
        AsideNavbarComponent,
        DigitalMarketerBannerComponent,
        DigitalMarketerAboutComponent,
        DigitalMarketerServicesComponent,
        ActivitiesComponent,
        FeedbackComponent,
        ClientsComponent,
        HireMeComponent,
        BlogsComponent,
        ContactComponent,
        FooterComponent,
    ],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss',
})
export class HomeDemoOneComponent {}
