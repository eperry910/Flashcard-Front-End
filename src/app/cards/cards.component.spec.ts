import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards.component';
import { CardOperationsService } from '../card-operations.service';
import { of } from 'rxjs';
import { Flashcard } from '../flashcard';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let cardOpSpy: jasmine.SpyObj<CardOperationsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CardOperationsService', ['getAllCards']);

    await TestBed.configureTestingModule({
      declarations: [CardsComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [{ provide: CardOperationsService, useValue: spy }]
    })
      .compileComponents();

    cardOpSpy = TestBed.inject(CardOperationsService) as jasmine.SpyObj<CardOperationsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve cards on initialization', () => {
    const cards: Array<Flashcard> = [
      {
        cardID: 1,
        dayCreated: new Date,
        category: '',
        prompt: '',
        answer: '',
        show: false
      },
      {
        cardID: 2,
        dayCreated: new Date,
        category: '',
        prompt: '',
        answer: '',
        show: false
      }
    ];
    cardOpSpy.getAllCards.and.returnValue(of(cards));

    component.ngOnInit();

    expect(component.cards).toEqual(cards);
  });

  it('should toggle flip state', () => {
    component.flip = 'inactive';

    component.toggleFlip();
    expect(component.flip).toBe('active');

    component.toggleFlip();
    expect(component.flip).toBe('inactive');
  });

  it('should increase current card', () => {
    component.cards = [
      {
        cardID: 1,
        dayCreated: new Date,
        category: '',
        prompt: '',
        answer: '',
        show: false
      },
      {
        cardID: 2,
        dayCreated: new Date,
        category: '',
        prompt: '',
        answer: '',
        show: false
      },
      {
        cardID: 3,
        dayCreated: new Date,
        category: '',
        prompt: '',
        answer: '',
        show: false
      }
    ];
    component.currentCard = 0;

    component.increaseCard();
    expect(component.currentCard).toBe(1);
    expect(component.flip).toBe('inactive');

    component.increaseCard();
    expect(component.currentCard).toBe(2);
    expect(component.flip).toBe('inactive');

    component.increaseCard();
    expect(component.currentCard).toBe(0);
    expect(component.flip).toBe('inactive');
  });

  it('should decrease current card', () => {
    component.cards = [
      {
        cardID: 1,
        dayCreated: new Date,
        category: '',
        prompt: '',
        answer: '',
        show: false
      },
      {
        cardID: 2,
        dayCreated: new Date,
        category: '',
        prompt: '',
        answer: '',
        show: false
      },
      {
        cardID: 3,
        dayCreated: new Date,
        category: '',
        prompt: '',
        answer: '',
        show: false
      }
    ];
    component.currentCard = 2;

    component.decreaseCard();
    expect(component.currentCard).toBe(1);
    expect(component.flip).toBe('inactive');

    component.decreaseCard();
    expect(component.currentCard).toBe(0);
    expect(component.flip).toBe('inactive');

    component.decreaseCard();
    expect(component.currentCard).toBe(2);
    expect(component.flip).toBe('inactive');
  });
});
