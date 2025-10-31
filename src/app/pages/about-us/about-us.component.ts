import { Component, OnInit } from '@angular/core';
import { AsideNavbarComponent } from '../../common/aside-navbar/aside-navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'rlc-about-us',
  imports: [AsideNavbarComponent,FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  offers:any[] = [];
  ngOnInit(): void {
    this.offers = [{image:'img/text-bg.jpg', title:'Luxury Staying'},
                  {image:'img/text-bg.jpg', title:'Internet Wifi'},
                  {image:'img/text-bg.jpg', title:'Air Conditioners'},
                  {image:'img/text-bg.jpg', title:'4WD Dune Bashing'},
                  {image:'img/text-bg.jpg', title:'Picnic Lunch In The Desert'},
                  {image:'img/text-bg.jpg', title:'Horse Riding'},
                  {image:'img/text-bg.jpg', title:'Quad Biking'},
                  {image:'img/text-bg.jpg', title:'Parties, Weddings & Birthdays'},
                  {image:'img/text-bg.jpg', title:'Berber Pizza "Medfouna"'},
                  {image:'img/text-bg.jpg', title:'Sandboarding'},
                  {image:'img/text-bg.jpg', title:'Camel Riding'},
                  {image:'img/text-bg.jpg', title:'Terrasse Garden'},
                  {image:'img/text-bg.jpg', title:'3 Restaurants'},
                  {image:'img/text-bg.jpg', title:'17 Luxurious Tents'},
                  {image:'img/text-bg.jpg', title:'Morocco Travel Tours'}
                ];
  }
}
