import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
@Component({
    selector: 'rlc-activity-details',
    imports: [
        RouterLink,
        AsideNavbarComponent,
        FooterComponent,
    ],
    templateUrl: './activity-details.component.html',
    styleUrl: './activity-details.component.scss',
})
export class ActivityDetailsComponent {}
