import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SaleCardsComponent } from './components/sale-cards/sale-cards.component';
import { ChangeCardsComponent } from './components/change-cards/change-cards.component';

const appRoutes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'ventas-tarjetas', component: SaleCardsComponent},
   {path: 'cambio-regalos', component: ChangeCardsComponent},
   {path: '**', component: HomeComponent},
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
