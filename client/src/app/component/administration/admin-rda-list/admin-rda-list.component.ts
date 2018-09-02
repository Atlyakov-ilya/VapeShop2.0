import { Component, OnInit } from '@angular/core';
import {RdaService} from '../../../service/rda.service';
import {RDA} from '../../../model/rda';

@Component({
  selector: 'app-admin-rda-list',
  templateUrl: './admin-rda-list.component.html',
  styleUrls: ['./admin-rda-list.component.css']
})
export class AdminRdaListComponent implements OnInit {

  RDAs: RDA[];
  searchRDA = '';

  constructor(private rdaService: RdaService) { }

  ngOnInit() {
    this.rdaService.getListOfRDA().subscribe(data =>
      this.RDAs = data as RDA[]);
  }

  deleteRDAById(mechanicalModId: number) {
    this.rdaService.deleteRDAById(mechanicalModId).subscribe( () =>
      this.rdaService.getListOfRDA().subscribe(data =>
        this.RDAs = data as RDA[])
    );
  }

}
