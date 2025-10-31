import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-book-trainer',
    imports: [RouterLink],
    templateUrl: './book-trainer.component.html',
    styleUrl: './book-trainer.component.scss',
})
export class BookTrainerComponent {
    constructor(
        private viewportScroller: ViewportScroller,
        public router: Router
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
