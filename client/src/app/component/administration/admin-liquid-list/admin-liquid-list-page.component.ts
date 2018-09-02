import {Component, Input, OnInit} from '@angular/core';
import {LiquidService} from '../../../service/liquid.service';
import {Liquid} from '../../../model/liquid';
import {Observable} from 'rxjs/Observable';
import {UploadFileService} from '../../../service/upload.service';

@Component({
  selector: 'app-admin-liquid-list-page',
  templateUrl: './admin-liquid-list-page.component.html',
  styleUrls: ['./admin-liquid-list-page.component.css']
})
export class AdminLiquidListPageComponent implements OnInit {

  liquids: Liquid[];
  searchLiquid = '';

  constructor(private liquidService: LiquidService) {}

  ngOnInit() {
    this.liquidService.getListOfLiquids().subscribe(data =>
         this.liquids = data as Liquid[]);
  }

  deleteLiquidById(liquidId: number) {
    this.liquidService.deleteLiquidById(liquidId).subscribe( () =>
      this.liquidService.getListOfLiquids().subscribe(data =>
        this.liquids = data as Liquid[])
    );
  }
}
