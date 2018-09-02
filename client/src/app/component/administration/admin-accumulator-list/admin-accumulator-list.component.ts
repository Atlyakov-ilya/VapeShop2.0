import { Component, OnInit } from '@angular/core';
import {Accumulator} from '../../../model/accumulator';
import {AccumulatorService} from '../../../service/accumulator.service';
import {Liquid} from '../../../model/liquid';


@Component({
  selector: 'app-admin-accumulator-list',
  templateUrl: './admin-accumulator-list.component.html',
  styleUrls: ['./admin-accumulator-list.component.css']
})
export class AdminAccumulatorListComponent implements OnInit {

  accumulators: Accumulator[];
  searchAccumulator = '';

  constructor(private accumulatorService: AccumulatorService) { }

  ngOnInit() {
    this.accumulatorService.getListOfAccumulators().subscribe(data =>
      this.accumulators = data as Accumulator[]);
  }

  deleteAccumulatorById(liquidId: number) {
    this.accumulatorService.deleteAccumulatorById(liquidId).subscribe( () =>
      this.ngOnInit()
    );
}

}
