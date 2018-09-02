import { Injectable } from '@angular/core';
import {Liquid} from '../model/liquid';
import {HttpClient} from '@angular/common/http';
import {RDA} from '../model/rda';

@Injectable()
export class RdaService {

  constructor(private http: HttpClient) { }

  private url = `http://127.0.0.1:8080`;

  saveNewRDA(body: RDA, fileName) {
    body.fileName = fileName;
    console.log(body);
    return this.http.post(`${this.url}/rda`, body);
  }

  getListOfRDA() {
    return this.http.get(`${this.url}/rdas`);
  }

  deleteRDAById(rdaId: number) {
    return this.http.delete(`${this.url}/rda/${rdaId}`);
  }
  getRDAById(rdaId: number) {
    return this.http.get(`${this.url}/rda/${rdaId}`);
  }

  updateRDA(body: RDA) {
    return this.http.put(`${this.url}/rda/${body.rdaId}`, body);
  }

}
