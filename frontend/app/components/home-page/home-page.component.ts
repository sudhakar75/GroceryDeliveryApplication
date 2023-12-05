import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomePageComponent implements OnInit {
 logo:string="../../../assets/images/grocery.jpg";
 images = [
    'https://img.freepik.com/premium-photo/supermarket-interior-shelves-with-various-products-full-trolley-basket_771335-31835.jpg?w=900',
    'https://img.freepik.com/free-vector/supermarket-sale-background-design_23-2149355543.jpg?w=740&t=st=1701743282~exp=1701743882~hmac=44d55b72b19584d84151c68213aa5566f3eae2a80efcb12df675a216ef4b9e1f',
    '../../../assets/images/banner4a.jpg'
];

  constructor(
    config: NgbCarouselConfig,
    private route: Router
  ) {
    config.interval = 2000;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  gotoLogin(): void {
    this.route.navigate(['/client-login'])
  }

}
