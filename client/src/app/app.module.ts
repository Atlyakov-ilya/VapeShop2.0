import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './component/user_part/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './component/user_part/header/header.component';
import { FooterComponent } from './component/user_part/footer/footer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ButtonSubmitDirective } from './directive/button-submit.directive';
import { RegistrationComponent } from './component/user_part/registration/registration.component';
import { CatalogComponent } from './component/user_part/catalog/catalog.component';
import { ItemCardComponent } from './component/user_part/item-card/item-card.component';
import { BasketComponent } from './component/user_part/basket/basket.component';
import { OrderComponent } from './component/user_part/order/order.component';
import { NewsComponent } from './component/user_part/news/news.component';
import {UserService} from './service/user.service';
import { LoginComponent } from './component/user_part/login/login.component';
import { AdminMainPageComponent } from './component/administration/admin-main-page/admin-main-page.component';
import { AdminLiquidPageComponent } from './component/administration/admin-liquid/admin-liquid-page.component';
import { AdminLiquidListPageComponent } from './component/administration/admin-liquid-list/admin-liquid-list-page.component';
import { AdminMechanicalModComponent } from './component/administration/admin-mechanical-mod/admin-mechanical-mod.component';
import { AdminMechanicalModListComponent } from './component/administration/admin-mechanical-mod-list/admin-mechanical-mod-list.component';
import { AdminRdaComponent } from './component/administration/admin-rda/admin-rda.component';
import { AdminRdaListComponent } from './component/administration/admin-rda-list/admin-rda-list.component';
import { AdminAccumulatorListComponent } from './component/administration/admin-accumulator-list/admin-accumulator-list.component';
import { AdminAccumulatorComponent } from './component/administration/admin-accumulator/admin-accumulator.component';
import {NewsService} from './service/news.service';
import {UploadFileService} from './service/upload.service';
import {LiquidService} from './service/liquid.service';
import {AccumulatorService} from './service/accumulator.service';
import { AdminAccumulatorEditComponent } from './component/administration/admin-accumulator-edit/admin-accumulator-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminAccumulatorFilterPipe } from './pipe/admin-accumulator-filter.pipe';
import { AdminLiquidEditComponent } from './component/administration/admin-liquid-edit/admin-liquid-edit.component';
import { AdminMechanicalModEditComponent } from './component/administration/admin-mechanical-mod-edit/admin-mechanical-mod-edit.component';
import { AdminRdaEditComponent } from './component/administration/admin-rda-edit/admin-rda-edit.component';
import { AccumulatorListComponent } from './component/user_part/catalog/accumulator-list/accumulator-list.component';
import { AdminLiquidFilterPipe } from './pipe/admin-liquid-filter.pipe';
import {MechanicalModService} from './service/mechanical-mod.service';
import {RdaService} from './service/rda.service';
import { AdminMechanicalModFilterPipe } from './pipe/admin-mechanical-mod-filter.pipe';
import { AdminRdaFilterPipe } from './pipe/admin-rda-filter.pipe';
import { LiquidListComponent } from './component/user_part/catalog/liquid-list/liquid-list.component';
import { RdaListComponent } from './component/user_part/catalog/rda-list/rda-list.component';
import { MechanicalModListComponent } from './component/user_part/catalog/mechanical-mod-list/mechanical-mod-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ButtonSubmitDirective,
    RegistrationComponent,
    CatalogComponent,
    ItemCardComponent,
    BasketComponent,
    OrderComponent,
    NewsComponent,
    LoginComponent,
    AdminMainPageComponent,
    AdminLiquidPageComponent,
    AdminLiquidListPageComponent,
    AdminMechanicalModComponent,
    AdminMechanicalModListComponent,
    AdminRdaComponent,
    AdminRdaListComponent,
    AdminAccumulatorListComponent,
    AdminAccumulatorComponent,
    AdminAccumulatorEditComponent,
    AdminAccumulatorFilterPipe,
    AdminLiquidEditComponent,
    AdminMechanicalModEditComponent,
    AdminRdaEditComponent,
    AccumulatorListComponent,
    AdminLiquidFilterPipe,
    AdminMechanicalModFilterPipe,
    AdminRdaFilterPipe,
    LiquidListComponent,
    RdaListComponent,
    MechanicalModListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [
    UserService,
    LiquidService,
    AccumulatorService,
    NewsService,
    UploadFileService,
    MechanicalModService,
    RdaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
