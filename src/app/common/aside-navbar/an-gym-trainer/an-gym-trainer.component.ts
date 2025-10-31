import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-an-gym-trainer',
    imports: [RouterLink],
    templateUrl: './an-gym-trainer.component.html',
    styleUrl: './an-gym-trainer.component.scss',
})
export class AnGymTrainerComponent {
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
