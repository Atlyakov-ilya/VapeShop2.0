import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadFileService} from '../../../service/upload.service';
import {RdaService} from '../../../service/rda.service';

@Component({
  selector: 'app-admin-rda',
  templateUrl: './admin-rda.component.html',
  styleUrls: ['./admin-rda.component.css']
})
export class AdminRdaComponent implements OnInit {

  rdaForm: FormGroup;
  selectedFiles: FileList;
  currentFileUpload;

  constructor(private rdaService: RdaService,
              private uploadService: UploadFileService) { }

  ngOnInit() {
    this.rdaForm = new FormGroup({
      brand:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      name:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      diameter: new FormControl('Диаметр', [Validators.required]),
      material: new FormControl('Материал', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
  }

  save(value) {
    const fileName = 'rda_' + this.currentFileUpload.name;
    this.uploadService.pushFileToStorage(this.currentFileUpload, fileName).subscribe(data => {
      console.log(this.currentFileUpload);
    }, error => {
      console.log(error);
    });
    this.rdaService.saveNewRDA(value, fileName).subscribe();
    this.selectedFiles = undefined;
    this.rdaForm.reset();
  }

}
