import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MechanicalMod} from '../model/mechanical_mod';

@Injectable()
export class MechanicalModService {

  constructor(private http: HttpClient) {}

  private url = `http://127.0.0.1:8080`;

  saveNewMechanicalMod(body: MechanicalMod, fileName) {
    body.fileName = fileName;
    console.log(body);
    return this.http.post(`${this.url}/mechanicalMod`, body);
  }

  getListOfMechanicalMods() {
    return this.http.get(`${this.url}/mechanicalMods`);
  }

  deleteMechanicalModById(mechanicalModId: number) {
    return this.http.delete(`${this.url}/mechanicalMod/${mechanicalModId}`);
  }
  getMechanicalModById(mechanicalModId: number) {
    return this.http.get(`${this.url}/mechanicalMod/${mechanicalModId}`);
  }

  updateMechanicalMod(body: MechanicalMod) {
    console.log(body.fileName);
    return this.http.put(`${this.url}/mechanicalMod/${body.mechanicalModId}`, body);
  }
}
