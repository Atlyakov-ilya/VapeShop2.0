import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UploadFileService} from '../../../service/upload.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccumulatorService} from '../../../service/accumulator.service';
import {Accumulator} from '../../../model/accumulator';


@Component({
  selector: 'app-admin-accumulator-edit',
  templateUrl: './admin-accumulator-edit.component.html',
  styleUrls: ['./admin-accumulator-edit.component.css']
})
export class AdminAccumulatorEditComponent implements OnInit {

  accumulatorId: string;
  accumulator = new Accumulator();
  selectedFiles: FileList;
  currentFileUpload: File;
  fileName = '';

  constructor(private uploadService: UploadFileService,
              private accumulatorService: AccumulatorService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.accumulatorId = this.route.snapshot.params['accumulatorId'];
    if (this.accumulatorId !== undefined) {
       this.accumulatorService.getAccumulatorById(Number(this.accumulatorId))
        .subscribe(acc => {
          this.accumulator = acc as Accumulator;
        });
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
  }

  update(accumulator) {
    if (this.currentFileUpload !== undefined) {
      this.fileName = 'accumulator_' + this.currentFileUpload.name;
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.fileName).subscribe(data => {
      }, error => {
        console.log(error);
      });
      accumulator.fileName = this.fileName;
      this.accumulatorService.updateAccumulator(accumulator).subscribe();
    } else {
      this.accumulatorService.updateAccumulator(accumulator).subscribe();
    }
    this.selectedFiles = undefined;
    this.fileName = undefined;
  }
}
