import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return 'url(\'assets/images/bgimages/line_main.jpg\')';
  }
}
