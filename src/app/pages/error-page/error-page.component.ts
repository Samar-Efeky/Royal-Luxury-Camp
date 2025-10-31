import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarDemosComponent } from '../../common/sidebar-demos/sidebar-demos.component';

@Component({
    selector: 'rlc-error-page',
    imports: [RouterLink, SidebarDemosComponent],
    templateUrl: './error-page.component.html',
    styleUrl: './error-page.component.scss',
})
export class ErrorPageComponent {}
