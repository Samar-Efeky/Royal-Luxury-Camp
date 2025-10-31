import { NgClass,  ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rlc-digital-marketer-banner',
    imports: [NgClass],
    templateUrl: './digital-marketer-banner.component.html',
    styleUrl: './digital-marketer-banner.component.scss',
})
export class DigitalMarketerBannerComponent {
    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    // BG Image Scroll
    backgroundPositionY = 0;
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const scrollY = window.scrollY;
        this.backgroundPositionY = scrollY * 0.5; // Adjust the multiplier to control the speed of the parallax effect
    }
}
