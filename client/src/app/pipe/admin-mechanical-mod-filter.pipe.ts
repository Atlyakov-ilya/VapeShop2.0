import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminMechanicalModFilter'
})
export class AdminMechanicalModFilterPipe implements PipeTransform {

  transform(mechanicalMods,  searchMechanicalMod: string, brand: string,
            name: string,  diameter: number, material: string, price: number) {
    if ( searchMechanicalMod === '') {
      return mechanicalMods;
    }
    return mechanicalMods.filter(mechanicalMod => mechanicalMod[brand].toLowerCase().indexOf( searchMechanicalMod.toLowerCase()) !== -1 ||
      mechanicalMod[name].toLowerCase().indexOf( searchMechanicalMod.toLowerCase()) !== -1 ||
      mechanicalMod[diameter].toString().toLowerCase().indexOf( searchMechanicalMod.toLowerCase()) !== -1 ||
      mechanicalMod[material].toString().toLowerCase().indexOf( searchMechanicalMod.toLowerCase()) !== -1 ||
      mechanicalMod[price].toString().toLowerCase().indexOf( searchMechanicalMod.toLowerCase()) !== -1
    );

  }

}
