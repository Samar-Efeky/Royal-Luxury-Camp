import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rlc-funfacts',
    imports: [],
    templateUrl: './funfacts.component.html',
    styleUrl: './funfacts.component.scss',
})
export class FunfactsComponent {
    constructor(public router: Router) {}
}
