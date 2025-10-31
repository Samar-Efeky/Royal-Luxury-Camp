import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-aside-navbar',
    imports: [RouterLink],
    templateUrl: './aside-navbar.component.html',
    styleUrl: './aside-navbar.component.scss',
})
export class AsideNavbarComponent {
    // Menu Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    constructor(
        private viewportScroller: ViewportScroller,
        public router: Router
    ) {}

    // Section to Section Scroll
    public onClick(elementId: string): void {
        if (this.router.url !== '/') {
            // If the user is not on the home page, navigate to home first
            this.router.navigate(['/'], { fragment: elementId });
        } else {
            // If already on the home page, scroll directly to the section
            this.viewportScroller.scrollToAnchor(elementId);
        }
    }
}
