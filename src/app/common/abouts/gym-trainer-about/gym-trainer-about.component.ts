import { NgClass, NgIf, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-gym-trainer-about',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './gym-trainer-about.component.html',
    styleUrl: './gym-trainer-about.component.scss',
})
export class GymTrainerAboutComponent {
    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
}
