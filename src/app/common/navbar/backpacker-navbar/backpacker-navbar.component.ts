import { Component, HostListener } from '@angular/core';
import { NgClass, ViewportScroller } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-backpacker-navbar',
    imports: [RouterLink, NgClass],
    templateUrl: './backpacker-navbar.component.html',
    styleUrl: './backpacker-navbar.component.scss',
})
export class BackpackerNavbarComponent {
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
