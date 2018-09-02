import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminRdaFilter'
})
export class AdminRdaFilterPipe implements PipeTransform {

  transform(RDAs,  searchRDA: string, brand: string,
            name: string,  diameter: number, material: string, price: number) {
    if (searchRDA === '') {
      return RDAs;
    }
    return RDAs.filter(rda => rda[brand].toLowerCase().indexOf(searchRDA.toLowerCase()) !== -1 ||
      rda[name].toLowerCase().indexOf(searchRDA.toLowerCase()) !== -1 ||
      rda[diameter].toString().toLowerCase().indexOf(searchRDA.toLowerCase()) !== -1 ||
      rda[material].toString().toLowerCase().indexOf(searchRDA.toLowerCase()) !== -1 ||
      rda[price].toString().toLowerCase().indexOf(searchRDA.toLowerCase()) !== -1
    );

  }

}
