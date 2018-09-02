import { Component, OnInit } from '@angular/core';
import {Liquid} from '../../../model/liquid';
import {UploadFileService} from '../../../service/upload.service';
import {LiquidService} from '../../../service/liquid.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-liquid-edit',
  templateUrl: './admin-liquid-edit.component.html',
  styleUrls: ['./admin-liquid-edit.component.css']
})
export class AdminLiquidEditComponent implements OnInit {

  liquidId: string;
  liquid = new Liquid();
  selectedFiles: FileList;
  currentFileUpload: File;
  fileName = '';

  constructor(private liquidService: LiquidService,
              private uploadService: UploadFileService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.liquidId = this.route.snapshot.params['liquidId'];
    this.liquidService.getLiquidById(Number(this.liquidId)).subscribe(data => {
      this.liquid = data as Liquid;
      console.log(this.liquid);
    });
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
  }

  update(liquid) {
    if (this.currentFileUpload !== undefined) {
      this.fileName = 'liquid_' + this.currentFileUpload.name;
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.fileName).subscribe(data => {
      }, error => {
        console.log(error);
      });
      liquid.liquidFileName = this.fileName;
      this.liquidService.updateLiquid(liquid).subscribe();
    } else {
      this.liquidService.updateLiquid(liquid).subscribe();
    }
    this.selectedFiles = undefined;
    this.fileName = undefined;
  }
}
