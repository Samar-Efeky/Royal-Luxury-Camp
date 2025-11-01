import { Component } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { FooterComponent } from "../../common/footer/footer.component";

@Component({
  selector: 'rlc-getting-here',
  imports: [AsideNavbarComponent, FooterComponent],
  templateUrl: './getting-here.component.html',
  styleUrl: './getting-here.component.scss'
})
export class GettingHereComponent {

}
