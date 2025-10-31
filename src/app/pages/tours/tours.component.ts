import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'rlc-tours',
  imports: [AsideNavbarComponent],
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
