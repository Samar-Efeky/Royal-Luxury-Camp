import { NgClass, NgIf, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-digital-marketer-about',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './digital-marketer-about.component.html',
    styleUrl: './digital-marketer-about.component.scss',
})
export class DigitalMarketerAboutComponent {
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
