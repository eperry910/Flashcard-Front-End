import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardTableComponent } from './card-table/card-table.component';
import { ChangeCardComponent } from './change-card/change-card.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'NewCard', component: CreateCardComponent },
  { path: 'UpdateCard', component: ChangeCardComponent },
  { path: 'Table', component: CardTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
