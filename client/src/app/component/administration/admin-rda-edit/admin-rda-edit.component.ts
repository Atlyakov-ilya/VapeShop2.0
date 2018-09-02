import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../../../service/upload.service';
import {ActivatedRoute} from '@angular/router';
import {RdaService} from '../../../service/rda.service';
import {RDA} from '../../../model/rda';

@Component({
  selector: 'app-admin-rda-edit',
  templateUrl: './admin-rda-edit.component.html',
  styleUrls: ['./admin-rda-edit.component.css']
})
export class AdminRdaEditComponent implements OnInit {

  rda = new RDA();
  selectedFiles: FileList;
  currentFileUpload: File;
  fileName = '';
  rdaId: string;

  constructor(private rdaService: RdaService,
              private uploadService: UploadFileService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.rdaId = this.route.snapshot.params['rdaId'];
    this.rdaService.getRDAById(Number(this.rdaId)).subscribe(data => {
      this.rda = data as RDA;
      console.log(this.rda);
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
  }

  update(rda) {
    if (this.currentFileUpload !== undefined) {
      this.fileName = 'rda_' + this.currentFileUpload.name;
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.fileName).subscribe(data => {
      }, error => {
        console.log(error);
      });
      rda.fileName = this.fileName;
      this.rdaService.updateRDA(rda).subscribe();
    } else {
      this.rdaService.updateRDA(rda).subscribe();
    }
    this.selectedFiles = undefined;
    this.fileName = undefined;
  }

}
