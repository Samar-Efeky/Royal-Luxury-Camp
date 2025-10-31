import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-cta',
    imports: [RouterLink],
    templateUrl: './cta.component.html',
    styleUrl: './cta.component.scss',
})
export class CtaComponent {
    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
