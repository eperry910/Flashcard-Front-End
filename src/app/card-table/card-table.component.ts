import { Component, OnInit } from '@angular/core';
import { CardOperationsService } from '../card-operations.service';
import { Flashcard } from '../flashcard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  constructor(private cardOp: CardOperationsService, private router: Router) { }
  cards: Array<Flashcard> = [];
  flip: string = 'inactive';
  updateCard: boolean = false;
  selectedCard: Flashcard = {
    cardID: 0,
    category: '',
    dayCreated: new Date,
    prompt: '',
    answer: '',
    show: false
  }
  ngOnInit() {
    this.cardOp.getAllCards().subscribe(w => {
      this.cards = w;
    })
  }
  changeShowCard(value: boolean) {
    this.updateCard = false;
  }


}
