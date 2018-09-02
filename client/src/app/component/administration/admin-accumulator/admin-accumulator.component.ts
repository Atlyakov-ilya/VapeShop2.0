import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadFileService} from '../../../service/upload.service';
import {AccumulatorService} from '../../../service/accumulator.service';


@Component({
  selector: 'app-admin-accumulator',
  templateUrl: './admin-accumulator.component.html',
  styleUrls: ['./admin-accumulator.component.css']
})
export class AdminAccumulatorComponent implements OnInit {
  accumulatorId: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  accumulatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private uploadService: UploadFileService,
              private accumulatorService: AccumulatorService) { }

  ngOnInit() {
    this.accumulatorForm = this.formBuilder.group({
      brand:  ['', [Validators.required, Validators.minLength(3)]],
      name:  ['', [Validators.required, Validators.minLength(3)]],
      format: ['Формат', [Validators.required, Validators.pattern('^[0-9]$')]],
      capacity: ['Ёмкасть', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
    }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
  }

  save(value) {
    const fileName = 'accumulator_' + this.currentFileUpload.name;
    this.uploadService.pushFileToStorage(this.currentFileUpload, fileName).subscribe( error => {
      console.log(error);
    });
    this.accumulatorService.saveNewAccumulator(value, fileName).subscribe();
    this.selectedFiles = undefined;
    this.accumulatorForm.reset();
  }
}
