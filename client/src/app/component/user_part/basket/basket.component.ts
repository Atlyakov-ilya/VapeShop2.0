import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return 'url(\'assets/images/bgimages/line_main.jpg\')';
  }
}
