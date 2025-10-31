import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
@Component({
    selector: 'rlc-service-details',
    imports: [
        RouterLink,
        AsideNavbarComponent,
        FooterComponent,
    ],
    templateUrl: './service-details.component.html',
    styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent {}
