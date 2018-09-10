import { CardsService } from './../cards.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from '../card';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'lw-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  dataSource: MatTableDataSource<Card>;
  displayedColumns = ['word', 'translated', 'edit'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCards(5).subscribe((cards) => {
      this.dataSource = new MatTableDataSource(cards);
      this.dataSource.sort = this.sort;
    });
  }

  deleteCard(card: Card) {
    console.log('delete card', card);
    this.cardsService.deleteCard(card).subscribe((success) => {
      if (success) {
        this.dataSource.data = this.dataSource.data.filter((c) => c !== card);
      }
    });
  }

  onNewCard(card: Card) {
    this.dataSource.data.push(card);
    this.dataSource.data = this.dataSource.data;
  }
}
