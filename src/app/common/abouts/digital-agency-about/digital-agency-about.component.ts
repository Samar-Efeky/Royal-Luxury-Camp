import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-digital-agency-about',
    imports: [RouterLink],
    templateUrl: './digital-agency-about.component.html',
    styleUrl: './digital-agency-about.component.scss',
})
export class DigitalAgencyAboutComponent {
    constructor(private viewportScroller: ViewportScroller) {}

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
