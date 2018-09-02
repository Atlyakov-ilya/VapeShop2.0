import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LiquidService} from '../../../service/liquid.service';
import {Liquid} from '../../../model/liquid';
import {UploadFileService} from '../../../service/upload.service';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from "util";


@Component({
  selector: 'app-admin-liquid-page',
  templateUrl: './admin-liquid-page.component.html',
  styleUrls: ['./admin-liquid-page.component.css']
})
export class AdminLiquidPageComponent implements OnInit {

  liquidForm: FormGroup;
  selectedFiles: FileList;
  currentFileUpload;
  liquidId: string;

  constructor(private liquidService: LiquidService,
              private uploadService: UploadFileService) { }

  ngOnInit() {
      this.liquidForm = new FormGroup({
        brand:  new FormControl('', [Validators.required, Validators.minLength(3)]),
        name:  new FormControl('', [Validators.required, Validators.minLength(3)]),
        nicotine: new FormControl('Никотин', [Validators.required]),
        amount: new FormControl('Объём', [Validators.required]),
        composition: new FormControl('Состав', [Validators.required]),
        taste: new FormControl('Вкус', [Validators.required]),
        description: new FormControl('', [Validators.required, Validators.minLength(3)]),
        price: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required])
      });
    }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
  }

  save(value) {
    const fileName = 'liquid_' + this.currentFileUpload.name;
    this.uploadService.pushFileToStorage(this.currentFileUpload, fileName).subscribe(data => {
      console.log(this.currentFileUpload);
    }, error => {
      console.log(error);
    });
    this.liquidService.saveNewLiquid(value, fileName).subscribe();
    this.selectedFiles = undefined;
    this.liquidForm.reset();
  }
}
