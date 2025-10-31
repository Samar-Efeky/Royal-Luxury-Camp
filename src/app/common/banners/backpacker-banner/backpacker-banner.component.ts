import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rlc-backpacker-banner',
    imports: [NgClass],
    templateUrl: './backpacker-banner.component.html',
    styleUrl: './backpacker-banner.component.scss',
})
export class BackpackerBannerComponent {
    constructor(public router: Router) {}
}
