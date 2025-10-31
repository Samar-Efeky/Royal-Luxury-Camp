import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
import { SidebarDemosComponent } from '../../common/sidebar-demos/sidebar-demos.component';

@Component({
    selector: 'rlc-blog-details',
    imports: [
        RouterLink,
        AsideNavbarComponent,
        FooterComponent,
        SidebarDemosComponent,
    ],
    templateUrl: './blog-details.component.html',
    styleUrl: './blog-details.component.scss',
})
export class BlogDetailsComponent {}
