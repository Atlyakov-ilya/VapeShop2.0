import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminAccumulatorFilter'
})
export class AdminAccumulatorFilterPipe implements PipeTransform {

  transform(accumulators, searchAccumulator: string, brand: string,
            name: string, format: number, capacity: number, price: number) {
    if (searchAccumulator === '') {
      return accumulators;
    }
    return accumulators.filter(accumulator => accumulator[brand].toLowerCase().indexOf(searchAccumulator.toLowerCase()) !== -1 ||
      accumulator[name].toLowerCase().indexOf(searchAccumulator.toLowerCase()) !== -1 ||
      accumulator[format].toString().toLowerCase().indexOf(searchAccumulator.toLowerCase()) !== -1 ||
      accumulator[capacity].toString().toLowerCase().indexOf(searchAccumulator.toLowerCase()) !== -1 ||
      accumulator[price].toString().toLowerCase().indexOf(searchAccumulator.toLowerCase()) !== -1
    );

  }

}
