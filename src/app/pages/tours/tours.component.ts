import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FooterComponent } from '../../common/footer/footer.component';
@Component({
  selector: 'rlc-tours',
  imports: [AsideNavbarComponent,FooterComponent],
templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent {
  constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
