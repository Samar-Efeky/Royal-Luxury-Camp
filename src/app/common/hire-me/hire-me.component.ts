import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-hire-me',
    imports: [RouterLink],
    templateUrl: './hire-me.component.html',
    styleUrl: './hire-me.component.scss',
})
export class HireMeComponent {
    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
