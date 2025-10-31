import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'rlc-team',
    imports: [CarouselModule],
    templateUrl: './team.component.html',
    styleUrl: './team.component.scss',
})
export class TeamComponent {
    teamSlides: OwlOptions = {
        nav: false,
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            515: {
                items: 2,
            },
            695: {
                items: 2,
            },
            935: {
                items: 3,
            },
            1115: {
                items: 3,
            },
        },
    };
}
