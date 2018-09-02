import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminLiquidFilter'
})
export class AdminLiquidFilterPipe implements PipeTransform {

  transform(liquids, searchLiquid: string, brand: string,
            name: string,  nicotine: number, amount: string, price: number) {
    if (searchLiquid === '') {
      return liquids;
    }
    return liquids.filter(liquid => liquid[brand].toLowerCase().indexOf(searchLiquid.toLowerCase()) !== -1 ||
      liquid[name].toLowerCase().indexOf(searchLiquid.toLowerCase()) !== -1 ||
      liquid[nicotine].toString().toLowerCase().indexOf(searchLiquid.toLowerCase()) !== -1 ||
      liquid[amount].toString().toLowerCase().indexOf(searchLiquid.toLowerCase()) !== -1 ||
      liquid[price].toString().toLowerCase().indexOf(searchLiquid.toLowerCase()) !== -1
    );

  }

}
