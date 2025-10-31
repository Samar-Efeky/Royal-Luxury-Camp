import { NgIf, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
    selector: 'rlc-photographer-banner',
    imports: [RouterLink, NgxTypedWriterModule, NgIf],
    templateUrl: './photographer-banner.component.html',
    styleUrl: './photographer-banner.component.scss',
})
export class PhotographerBannerComponent {
    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
