import { CardDeckComponent } from './card-deck/card-deck.component';
import { CardListComponent } from './card-list/card-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'practise', component: CardDeckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
