import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'rlc-feedback',
    imports: [CarouselModule, NgClass],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
    constructor(public router: Router) {}

    feedbackSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        margin: 25,
        dots: true,
        autoplay: false,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ],
    };
}
