import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-an-backpacker',
    imports: [RouterLink],
    templateUrl: './an-backpacker.component.html',
    styleUrl: './an-backpacker.component.scss',
})
export class AnBackpackerComponent {
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
