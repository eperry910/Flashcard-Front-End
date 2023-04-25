import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardTableComponent } from './card-table/card-table.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'Table', component: CardTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
