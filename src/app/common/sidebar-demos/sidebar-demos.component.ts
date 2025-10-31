import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'rlc-sidebar-demos',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './sidebar-demos.component.html',
    styleUrl: './sidebar-demos.component.scss',
})
export class SidebarDemosComponent {
    // Sidebar Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
}
