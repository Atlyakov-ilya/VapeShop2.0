import { Component, OnInit } from '@angular/core';
import {MechanicalMod} from '../../../model/mechanical_mod';
import {MechanicalModService} from '../../../service/mechanical-mod.service';
import {UploadFileService} from '../../../service/upload.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-mechanical-mod-edit',
  templateUrl: './admin-mechanical-mod-edit.component.html',
  styleUrls: ['./admin-mechanical-mod-edit.component.css']
})
export class AdminMechanicalModEditComponent implements OnInit {

  mechanicalMod = new MechanicalMod();
  selectedFiles: FileList;
  currentFileUpload: File;
  fileName = '';
  mechanicalModId: string;

  constructor(private mechanicalModService: MechanicalModService,
              private uploadService: UploadFileService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.mechanicalModId = this.route.snapshot.params['mechanicalModId'];
    this.mechanicalModService.getMechanicalModById(Number(this.mechanicalModId)).subscribe(data => {
      this.mechanicalMod = data as MechanicalMod;
      console.log(this.mechanicalMod);
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
  }

  update(mechanicalMod) {
    if (this.currentFileUpload !== undefined) {
      this.fileName = 'mechanical_mod_' + this.currentFileUpload.name;
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.fileName).subscribe(data => {
      }, error => {
        console.log(error);
      });
      mechanicalMod.fileName = this.fileName;
      this.mechanicalModService.updateMechanicalMod(mechanicalMod).subscribe();
    } else {
      this.mechanicalModService.updateMechanicalMod(mechanicalMod).subscribe();
    }
    this.selectedFiles = undefined;
    this.fileName = undefined;
  }

}
