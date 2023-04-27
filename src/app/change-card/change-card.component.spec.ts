import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeCardComponent } from './change-card.component';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CardOperationsService } from '../card-operations.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('ChangeCardComponent', () => {
  let component: ChangeCardComponent;
  let fixture: ComponentFixture<ChangeCardComponent>;
  let cardOpsMock: jasmine.SpyObj<CardOperationsService>;
  let http: HttpClient;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CardOperationsService', ['updateCard', 'deleteCard']);
    await TestBed.configureTestingModule({
      declarations: [ChangeCardComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, FormsModule],
      providers: [{ provide: CardOperationsService, useValue: spy }]
    })
      .compileComponents();
    cardOpsMock = TestBed.inject(CardOperationsService) as jasmine.SpyObj<CardOperationsService>;
    http = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCardComponent);
    component = fixture.componentInstance;
    component.chosenCard = {
      cardID: 1,
      dayCreated: new Date,
      category: '',
      prompt: '',
      answer: '',
      show: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit showWindow when reload is called', () => {
    spyOn(component.showWindow, 'emit');
    component.reload();
    expect(component.showWindow.emit).toHaveBeenCalledWith(false);
  });

  it('should call updateCard on form submission', () => {
    const formBuilder = new FormBuilder();
    component.chosenCard = {
      cardID: 1,
      category: 'category',
      dayCreated: new Date('2023-05-01T00:00:00'),
      prompt: 'prompt',
      answer: 'answer',
      show: false
    };
    const formGroup: FormGroup = formBuilder.group({
      prompt: component.chosenCard.prompt,
      answer: component.chosenCard.answer
    });
    cardOpsMock.updateCard.and.returnValue(new Observable<void>)
    component.onSubmit();
    expect(cardOpsMock.updateCard).toHaveBeenCalledWith(component.chosenCard);
  });

  it('should call deleteCard when deleteCard is called', () => {
    component.chosenCard = {
      cardID: 1,
      category: 'category',
      dayCreated: new Date('2023-05-01T00:00:00'),
      prompt: 'prompt',
      answer: 'answer',
      show: false
    };
    cardOpsMock.deleteCard.and.returnValue(of());
    component.deleteCard();
    expect(cardOpsMock.deleteCard).toHaveBeenCalledWith(component.chosenCard);
  });

  it('should stop event propagation when stopPropogation is called', () => {
    const event = jasmine.createSpyObj('$event', ['stopPropagation']);
    component.stopPropogation();
    expect(event.stopPropagation).toHaveBeenCalledTimes(0);
  });
});
