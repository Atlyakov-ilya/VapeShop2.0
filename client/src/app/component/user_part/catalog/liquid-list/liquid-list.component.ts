import { Component, OnInit } from '@angular/core';
import {Liquid} from '../../../../model/liquid';
import {LiquidService} from '../../../../service/liquid.service';

@Component({
  selector: 'app-liquid-list',
  templateUrl: './liquid-list.component.html',
  styleUrls: ['./liquid-list.component.css']
})
export class LiquidListComponent implements OnInit {

  liquids: Liquid[];

  constructor(private liquidService: LiquidService) { }

  ngOnInit() {
    this.liquidService.getListOfLiquids().subscribe(data =>
      this.liquids = data as Liquid[]);
  }


  getUrl() {
    return 'url(\'assets/images/bgimages/line_main.jpg\')';
  }
}
