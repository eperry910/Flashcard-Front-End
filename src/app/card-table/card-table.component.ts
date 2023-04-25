import { Component, OnInit } from '@angular/core';
import { CardOperationsService } from '../card-operations.service';
import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  constructor(private cardOp: CardOperationsService) { }
  cards: Array<Flashcard> = [];
  flip: string = 'inactive';
  ngOnInit() {
    this.cardOp.getAllCards().subscribe(w => {
      this.cards = w;
    })
  }

}
