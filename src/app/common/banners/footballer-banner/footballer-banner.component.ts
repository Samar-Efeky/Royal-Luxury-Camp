import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'rlc-footballer-banner',
    imports: [CarouselModule, NgClass, NgIf],
    templateUrl: './footballer-banner.component.html',
    styleUrl: './footballer-banner.component.scss',
})
export class FootballerBannerComponent {
    constructor(public router: Router) {}

    homeSlides: OwlOptions = {
        items: 1,
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 500,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ],
    };

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
}
