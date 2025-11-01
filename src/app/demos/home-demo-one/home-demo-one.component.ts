import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { HireMeComponent } from '../../common/hire-me/hire-me.component';
import { ContactComponent } from '../../common/contact/contact.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { DigitalMarketerBannerComponent } from '../../common/banners/digital-marketer-banner/digital-marketer-banner.component';
import { BlogsComponent } from '../../common/blogs/blogs.component';
import { ActivitiesComponent } from '../../common/activities/activities.component';
import { AccomodationsComponent } from '../../common/accomodations/accomodations.component';
import { GlampingServicesComponent } from '../../common/glamping-services/glamping-services.component';
@Component({
    selector: 'rlc-home-demo-one',
    imports: [
    AsideNavbarComponent,
    DigitalMarketerBannerComponent,
    GlampingServicesComponent,
    ActivitiesComponent,
    FeedbackComponent,
    ClientsComponent,
    HireMeComponent,
    BlogsComponent,
    ContactComponent,
    FooterComponent,
    AccomodationsComponent
],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss',
})
export class HomeDemoOneComponent {}
