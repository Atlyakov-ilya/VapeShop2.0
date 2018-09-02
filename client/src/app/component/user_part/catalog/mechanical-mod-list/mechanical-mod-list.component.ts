import { Component, OnInit } from '@angular/core';
import {Liquid} from '../../../../model/liquid';
import {LiquidService} from '../../../../service/liquid.service';
import {MechanicalMod} from '../../../../model/mechanical_mod';
import {MechanicalModService} from '../../../../service/mechanical-mod.service';

@Component({
  selector: 'app-mechanical-mod-list',
  templateUrl: './mechanical-mod-list.component.html',
  styleUrls: ['./mechanical-mod-list.component.css']
})
export class MechanicalModListComponent implements OnInit {

  mechanicalMods: MechanicalMod[];

  constructor(private mechanicalModService: MechanicalModService) { }

  ngOnInit() {
    this.mechanicalModService.getListOfMechanicalMods().subscribe(data =>
      this.mechanicalMods = data as MechanicalMod[]);
  }


  getUrl() {
    return 'url(\'assets/images/bgimages/line_main.jpg\')';
  }

}
