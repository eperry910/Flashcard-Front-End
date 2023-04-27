import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Flashcard } from '../flashcard';
import { CardOperationsService } from '../card-operations.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CardsComponent implements OnInit {
  constructor(private cardOp: CardOperationsService, private http: HttpClient) { }

  cards: Array<Flashcard> = [];
  currentCard: number = 0
  flip: string = 'inactive';
  ngOnInit() {
    this.cardOp.getAllCards().subscribe(w => {
      this.cards = w;
    })
  }



  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
  increaseCard() {
    this.flip = 'inactive'
    if ((this.currentCard + 1 >= this.cards.length)) {
      this.currentCard = 0;
    } else {
      this.currentCard++;
    }
  }
  decreaseCard() {
    this.flip = 'inactive'
    if ((this.currentCard == 0)) {
      this.currentCard = this.cards.length - 1;
    } else {
      this.currentCard--;
    }
  }
}
