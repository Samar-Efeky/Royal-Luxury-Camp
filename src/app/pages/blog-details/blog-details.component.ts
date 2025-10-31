import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';
@Component({
    selector: 'rlc-blog-details',
    imports: [
        RouterLink,
        AsideNavbarComponent,
        FooterComponent,
    ],
    templateUrl: './blog-details.component.html',
    styleUrl: './blog-details.component.scss',
})
export class BlogDetailsComponent {}
