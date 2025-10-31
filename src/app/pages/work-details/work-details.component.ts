import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
import { SidebarDemosComponent } from '../../common/sidebar-demos/sidebar-demos.component';

@Component({
    selector: 'rlc-work-details',
    imports: [
        RouterLink,
        AsideNavbarComponent,
        FooterComponent,
        SidebarDemosComponent,
    ],
    templateUrl: './work-details.component.html',
    styleUrl: './work-details.component.scss',
})
export class WorkDetailsComponent {}
