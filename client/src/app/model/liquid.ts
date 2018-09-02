import {Observable} from 'rxjs/Observable';

export class Liquid {
  liquidId: number;
  brand: string;
  name: string;
  amount: string;
  nicotine: number;
  taste: string;
  composition: string;
  description: string;
  price: number;
  quantity: number;
  country: string;
  liquidFileName: Observable<string>;
}
