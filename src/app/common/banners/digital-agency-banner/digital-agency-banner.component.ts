import { NgClass, NgIf, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'rlc-digital-agency-banner',
    imports: [RouterLink, CarouselModule, NgClass, NgIf],
    templateUrl: './digital-agency-banner.component.html',
    styleUrl: './digital-agency-banner.component.scss',
})
export class DigitalAgencyBannerComponent {
    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    // Owl Carousel
    homeSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 500,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ],
    };
}
