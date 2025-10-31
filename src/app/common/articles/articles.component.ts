import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'rlc-articles',
    imports: [RouterLink],
    templateUrl: './articles.component.html',
    styleUrl: './articles.component.scss',
})
export class ArticlesComponent {}
