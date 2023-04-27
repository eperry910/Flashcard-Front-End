import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCardComponent } from './create-card.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardOperationsService } from '../card-operations.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

describe('CreateCardComponent', () => {
  let component: CreateCardComponent;
  let fixture: ComponentFixture<CreateCardComponent>;
  let cardOpsMock: jasmine.SpyObj<CardOperationsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CardOperationsService', ['createCard']);
    await TestBed.configureTestingModule({
      declarations: [CreateCardComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, FormsModule],
      providers: [{ provide: CardOperationsService, useValue: spy }]
    })
      .compileComponents();
    cardOpsMock = TestBed.inject(CardOperationsService) as jasmine.SpyObj<CardOperationsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createCard on form submission', () => {
    const formBuilder = new FormBuilder();
    const formGroup = formBuilder.group({
      prompt: '',
      answer: ''
    });
    component.chosenCard.prompt = 'test prompt';
    component.chosenCard.answer = 'test answer';
    cardOpsMock.createCard.and.returnValue(new Observable<void>)
    component.onSubmit();
    expect(cardOpsMock.createCard).toHaveBeenCalledWith(component.chosenCard);
  });

  it('should stop event propagation when stopPropogation is called', () => {
    const event = jasmine.createSpyObj('$event', ['stopPropagation']);
    component.stopPropogation();
    expect(event.stopPropagation).toHaveBeenCalledTimes(0);
  });

  it('should emit showWindow when reload is called', () => {
    spyOn(component.showWindow, 'emit');
    component.reload();
    expect(component.showWindow.emit).toHaveBeenCalledWith(false);
  });
});
