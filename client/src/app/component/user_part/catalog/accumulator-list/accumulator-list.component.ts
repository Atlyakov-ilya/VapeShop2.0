import { Component, OnInit } from '@angular/core';
import {Liquid} from '../../../../model/liquid';
import {LiquidService} from '../../../../service/liquid.service';
import {AccumulatorService} from '../../../../service/accumulator.service';
import {Accumulator} from '../../../../model/accumulator';

@Component({
  selector: 'app-accumulator-list',
  templateUrl: './accumulator-list.component.html',
  styleUrls: ['./accumulator-list.component.css']
})
export class AccumulatorListComponent implements OnInit {

  accumulators: Accumulator[];

  constructor(private accumulatorService: AccumulatorService) { }

  ngOnInit() {
    this.accumulatorService.getListOfAccumulators().subscribe(data =>
      this.accumulators = data as Accumulator[]);
  }


  getUrl() {
    return 'url(\'assets/images/bgimages/line_main.jpg\')';
  }
}
