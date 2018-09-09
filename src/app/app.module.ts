import { MatModule } from './mat/mat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { CardComponent } from './card-deck/card/card.component';
import { ResultComponent } from './card-deck/result/result.component';
import { CardListComponent } from './card-list/card-list.component';
import { AddCardComponent } from './card-list/add-card/add-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardDeckComponent,
    CardComponent,
    ResultComponent,
    CardListComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
