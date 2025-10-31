import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'rlc-backpacker-instagram',
    imports: [CarouselModule],
    templateUrl: './backpacker-instagram.component.html',
    styleUrl: './backpacker-instagram.component.scss',
})
export class BackpackerInstagramComponent {
    instagramSlides: OwlOptions = {
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ],
        responsive: {
            0: {
                items: 2,
            },
            515: {
                items: 3,
            },
            695: {
                items: 4,
            },
            935: {
                items: 6,
            },
            1115: {
                items: 9,
            },
        },
    };
}
