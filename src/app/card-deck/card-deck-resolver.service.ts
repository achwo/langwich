import { Observable } from 'rxjs';
import { CardsService } from './../cards.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Card } from '../card';

@Injectable({
  providedIn: 'root'
})
export class CardDeckResolver implements Resolve<Card[]> {

  constructor(private cs: CardsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Card[]> {
    return this.cs.getCards(5);
  }
}
