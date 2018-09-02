import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MechanicalModService} from '../../../service/mechanical-mod.service';
import {UploadFileService} from '../../../service/upload.service';


@Component({
  selector: 'app-admin-mechanical-mod',
  templateUrl: './admin-mechanical-mod.component.html',
  styleUrls: ['./admin-mechanical-mod.component.css']
})
export class AdminMechanicalModComponent implements OnInit {

  modForm: FormGroup;
  selectedFiles: FileList;
  currentFileUpload;

  constructor(private mechanicalModService: MechanicalModService,
              private uploadService: UploadFileService) { }

  ngOnInit() {
    this.modForm = new FormGroup({
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
    const fileName = 'mechanical_mod_' + this.currentFileUpload.name;
    this.uploadService.pushFileToStorage(this.currentFileUpload, fileName).subscribe(data => {
      console.log(this.currentFileUpload);
    }, error => {
      console.log(error);
    });
    this. mechanicalModService.saveNewMechanicalMod(value, fileName).subscribe();
    this.selectedFiles = undefined;
    this.modForm.reset();
  }
}


