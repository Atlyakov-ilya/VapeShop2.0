import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/user_part/home/home.component';
import {RegistrationComponent} from './component/user_part/registration/registration.component';
import {CatalogComponent} from './component/user_part/catalog/catalog.component';
import {ItemCardComponent} from './component/user_part/item-card/item-card.component';
import {BasketComponent} from './component/user_part/basket/basket.component';
import {OrderComponent} from './component/user_part/order/order.component';
import {NewsComponent} from './component/user_part/news/news.component';
import {AdminMainPageComponent} from './component/administration/admin-main-page/admin-main-page.component';
import {AdminLiquidPageComponent} from './component/administration/admin-liquid/admin-liquid-page.component';
import {AdminLiquidListPageComponent} from './component/administration/admin-liquid-list/admin-liquid-list-page.component';
import {AdminMechanicalModComponent} from './component/administration/admin-mechanical-mod/admin-mechanical-mod.component';
import {AdminMechanicalModListComponent} from './component/administration/admin-mechanical-mod-list/admin-mechanical-mod-list.component';
import {AdminRdaComponent} from './component/administration/admin-rda/admin-rda.component';
import {AdminRdaListComponent} from './component/administration/admin-rda-list/admin-rda-list.component';
import {AdminAccumulatorComponent} from './component/administration/admin-accumulator/admin-accumulator.component';
import {AdminAccumulatorListComponent} from './component/administration/admin-accumulator-list/admin-accumulator-list.component';
import {AdminAccumulatorEditComponent} from './component/administration/admin-accumulator-edit/admin-accumulator-edit.component';
import {AccumulatorListComponent} from './component/user_part/catalog/accumulator-list/accumulator-list.component';
import {AdminLiquidEditComponent} from './component/administration/admin-liquid-edit/admin-liquid-edit.component';
import {AdminMechanicalModEditComponent} from './component/administration/admin-mechanical-mod-edit/admin-mechanical-mod-edit.component';
import {AdminRdaEditComponent} from './component/administration/admin-rda-edit/admin-rda-edit.component';
import {LiquidListComponent} from './component/user_part/catalog/liquid-list/liquid-list.component';
import {MechanicalModListComponent} from './component/user_part/catalog/mechanical-mod-list/mechanical-mod-list.component';
import {RdaListComponent} from './component/user_part/catalog/rda-list/rda-list.component';


const adminRouters: Routes = [
  { path: 'liquid', component: AdminLiquidPageComponent},
  { path: 'liquids', component: AdminLiquidListPageComponent},
  { path: 'liquid/:liquidId', component:  AdminLiquidEditComponent},
  { path: 'mechanical_mod', component: AdminMechanicalModComponent},
  { path: 'mechanical_mods', component: AdminMechanicalModListComponent},
  { path: 'mechanical_mod/:mechanicalModId', component: AdminMechanicalModEditComponent},
  { path: 'rda', component: AdminRdaComponent},
  { path: 'rdas', component: AdminRdaListComponent},
  { path: 'rda/:rdaId', component: AdminRdaEditComponent},
  { path: 'accumulator', component: AdminAccumulatorComponent},
  { path: 'accumulators', component: AdminAccumulatorListComponent},
  { path: 'accumulator/:accumulatorId', component: AdminAccumulatorEditComponent}
];

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'catalog', component: CatalogComponent},
  { path: 'catalog/stock', component: CatalogComponent},
  { path: 'catalog/rdas', component: RdaListComponent},
  { path: 'catalog/liquids', component: LiquidListComponent},
  { path: 'catalog/accumulators', component: AccumulatorListComponent},
  { path: 'catalog/mechanical_mods', component: MechanicalModListComponent},
  { path: 'item_card', component: ItemCardComponent},
  { path: 'basket', component: BasketComponent},
  { path: 'order', component: OrderComponent},
  { path: 'news', component: NewsComponent},
  { path: 'admin', component: AdminMainPageComponent, children: adminRouters}
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]

})
export class AppRoutingModule {}
