import { Component, HostListener } from '@angular/core';
import { NgClass, ViewportScroller } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-footballer-navbar',
    imports: [RouterLink, NgClass],
    templateUrl: './footballer-navbar.component.html',
    styleUrl: './footballer-navbar.component.scss',
})
export class FootballerNavbarComponent {
    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

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
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
