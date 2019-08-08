import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SaleCardsComponent } from './components/sale-cards/sale-cards.component';
import { ChangeCardsComponent } from './components/change-cards/change-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaleCardsComponent,
    ChangeCardsComponent

  ],
  imports: [
    BrowserModule,
    routing,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
