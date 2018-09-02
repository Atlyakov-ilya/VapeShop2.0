import { Component, OnInit } from '@angular/core';
import {MechanicalMod} from '../../../../model/mechanical_mod';
import {MechanicalModService} from '../../../../service/mechanical-mod.service';
import {RDA} from '../../../../model/rda';
import {RdaService} from '../../../../service/rda.service';

@Component({
  selector: 'app-rda-list',
  templateUrl: './rda-list.component.html',
  styleUrls: ['./rda-list.component.css']
})
export class RdaListComponent implements OnInit {

  rdas: RDA[];

  constructor(private rdaService: RdaService) { }

  ngOnInit() {
    this.rdaService.getListOfRDA().subscribe(data =>
      this.rdas = data as RDA[]);
  }


  getUrl() {
    return 'url(\'assets/images/bgimages/line_main.jpg\')';
  }

}
