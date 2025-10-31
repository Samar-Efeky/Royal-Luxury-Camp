import { NgClass, NgIf, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'rlc-photographer-about',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './photographer-about.component.html',
    styleUrl: './photographer-about.component.scss',
})
export class PhotographerAboutComponent {
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
