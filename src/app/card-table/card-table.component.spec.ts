import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardTableComponent } from './card-table.component';
import { CardOperationsService } from '../card-operations.service';
import { Flashcard } from '../flashcard';
import { Observable, of } from 'rxjs';

describe('CardTableComponent', () => {
  let component: CardTableComponent;
  let fixture: ComponentFixture<CardTableComponent>;
  let cardOpService: CardOperationsService;
  let spyGetAllCards: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTableComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CardOperationsService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTableComponent);
    component = fixture.componentInstance;
    cardOpService = TestBed.inject(CardOperationsService);

    spyGetAllCards = spyOn(cardOpService, 'getAllCards').and.returnValue(of([
      { cardID: 1, category: 'Category 1', dayCreated: new Date(), prompt: 'Prompt 1', answer: 'Answer 1', show: false },
      { cardID: 2, category: 'Category 2', dayCreated: new Date(), prompt: 'Prompt 2', answer: 'Answer 2', show: false },
      { cardID: 3, category: 'Category 3', dayCreated: new Date(), prompt: 'Prompt 3', answer: 'Answer 3', show: false }
    ]));

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all cards on init', () => {
    expect(spyGetAllCards).toHaveBeenCalled();
    expect(component.cards.length).toBe(3);
  });

  it('should set the updateCard flag to false when changeShowCard is called', () => {
    component.updateCard = true;
    component.changeShowCard(false);
    expect(component.updateCard).toBe(false);
  });
});
