import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardOperationsService } from '../card-operations.service';
import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  constructor(private formBuilder: FormBuilder, private cardOps: CardOperationsService) {

  }
  @Output() showWindow = new EventEmitter<boolean>()

  chosenCard: Flashcard = {
    cardID: 0,
    category: '',
    dayCreated: new Date,
    prompt: '',
    answer: '',
    show: false
  }
  onSubmit() {
    this.cardOps.createCard(this.chosenCard).subscribe(x => {
      window.location.reload();
    })
  }
  stopPropogation() {
    event?.stopPropagation()
  }
  reload() {
    this.showWindow.emit(false);
  }
}
