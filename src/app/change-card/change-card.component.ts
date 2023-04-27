import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CardOperationsService } from '../card-operations.service';


@Component({
  selector: 'app-change-card',
  templateUrl: './change-card.component.html',
  styleUrls: ['./change-card.component.css']
})

export class ChangeCardComponent {
  @Input() chosenCard: any;
  @Output() showWindow = new EventEmitter<boolean>()
  constructor(private formBuilder: FormBuilder, private cardOps: CardOperationsService) {

  }
  onSubmit() {
    this.cardOps.updateCard(this.chosenCard).subscribe(x => {
      window.location.reload()
    });
  }
  deleteCard() {
    this.cardOps.deleteCard(this.chosenCard).subscribe(x => {
      window.location.reload()
    });
  }
  reload() {
    this.showWindow.emit(false);
  }
  stopPropogation() {
    event?.stopPropagation()
  }

}
