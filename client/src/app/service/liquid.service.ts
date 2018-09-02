
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Liquid} from '../model/liquid';

@Injectable()
export class LiquidService {

  constructor(private http: HttpClient) {}

  private url = `http://127.0.0.1:8080`;

  saveNewLiquid(body: Liquid, fileName) {
    body.liquidFileName = fileName;
    console.log(body);
    return this.http.post(`${this.url}/liquid`, body);
  }

  getListOfLiquids() {
    return this.http.get(`${this.url}/liquids`);
  }

  deleteLiquidById(liquidId: number) {
    return this.http.delete(`${this.url}/liquid/${liquidId}`);
  }
  getLiquidById(liquidId: number) {
    return this.http.get(`${this.url}/liquid/${liquidId}`);
  }

  updateLiquid(body: Liquid) {
      return this.http.put(`${this.url}/liquid/${body.liquidId}`, body);
  }

}
