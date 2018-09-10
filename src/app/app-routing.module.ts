import { CardDeckComponent } from './card-deck/card-deck.component';
import { CardListComponent } from './card-list/card-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDeckResolver } from './card-deck/card-deck-resolver.service';

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'practise', component: CardDeckComponent, resolve: { cards: CardDeckResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ CardDeckResolver ]
})
export class AppRoutingModule { }
