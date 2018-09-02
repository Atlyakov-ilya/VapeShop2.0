import { Component, OnInit } from '@angular/core';
import {Liquid} from '../../../model/liquid';
import {MechanicalMod} from '../../../model/mechanical_mod';
import {MechanicalModService} from '../../../service/mechanical-mod.service';

@Component({
  selector: 'app-admin-mechanical-mod-list',
  templateUrl: './admin-mechanical-mod-list.component.html',
  styleUrls: ['./admin-mechanical-mod-list.component.css']
})
export class AdminMechanicalModListComponent implements OnInit {

  mechanicalMods: MechanicalMod[];
  searchMechanicalMod = '';

  constructor(private mechanicalModService: MechanicalModService) { }

  ngOnInit() {
    this.mechanicalModService.getListOfMechanicalMods().subscribe(data =>
      this.mechanicalMods = data as MechanicalMod[]);
  }

  deleteMechanicalModById(mechanicalModId: number) {
    this.mechanicalModService.deleteMechanicalModById(mechanicalModId).subscribe( () =>
      this.mechanicalModService.getListOfMechanicalMods().subscribe(data =>
        this.mechanicalMods = data as MechanicalMod[])
    );
  }

}
