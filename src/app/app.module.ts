import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardTableComponent } from './card-table/card-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeCardComponent } from './change-card/change-card.component';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateCardComponent } from './create-card/create-card.component';




@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardTableComponent,
    ChangeCardComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
