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
  displayedColumns = ['word', 'translated'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCards(5).subscribe((cards) => {
      this.dataSource = new MatTableDataSource(cards);
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }
}
