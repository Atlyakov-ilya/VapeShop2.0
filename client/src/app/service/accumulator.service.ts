import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accumulator} from '../model/accumulator';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccumulatorService {

  private url = `http://127.0.0.1:8080`;

  constructor(private http: HttpClient) { }

  saveNewAccumulator(body: Accumulator, fileName) {
    body.fileName = fileName;
    return this.http.post(`${this.url}/accumulator`, body);
  }

  getListOfAccumulators() {
    return this.http.get(`${this.url}/accumulators`);
  }

  getAccumulatorById(accumulatorId: number) {
    return this.http.get(`${this.url}/accumulator/${accumulatorId}`);
 }

  deleteAccumulatorById(accumulatorId: number) {
    return this.http.delete(`${this.url}/accumulator/${accumulatorId}`);
  }

  updateAccumulator(body: Accumulator) {
    return this.http.put(`${this.url}/accumulator/${body.accumulatorId}`, body);
  }



}
