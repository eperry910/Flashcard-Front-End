import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardOperationsService } from './card-operations.service';
import { Flashcard } from './flashcard';
import { Observable } from 'rxjs';

describe('CardOperationsService', () => {
  let service: CardOperationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardOperationsService]
    });
    service = TestBed.inject(CardOperationsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all cards', () => {
    const mockCards: Array<Flashcard> = [
      {
        cardID: 1,
        category: '',
        dayCreated: new Date,
        prompt: '',
        answer: '',
        show: false
      },
      {
        cardID: 2,
        category: '',
        dayCreated: new Date,
        prompt: '',
        answer: '',
        show: false
      }
    ];

    service.getAllCards().subscribe((cards: Array<Flashcard>) => {
      expect(cards.length).toBe(2);
      expect(cards).toEqual(mockCards);
    });

    const req = httpMock.expectOne(service.apiRoot + '/Flashcard');
    expect(req.request.method).toBe('GET');
    req.flush(mockCards);
  });

  it('should update a card', () => {
    const mockCardToUpdate: Flashcard = {
      cardID: 1,
      category: '',
      dayCreated: new Date,
      prompt: '',
      answer: '',
      show: false
    };

    service.updateCard(mockCardToUpdate).subscribe((res: any) => {
      expect(res).toEqual(Object({}));
    });

    const req = httpMock.expectOne(service.apiRoot + '/Flashcard/UpdateCard');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockCardToUpdate);
    req.flush({});
  });

  it('should delete a card', () => {
    const mockCardToDelete: Flashcard = {
      cardID: 1,
      category: '',
      dayCreated: new Date,
      prompt: '',
      answer: '',
      show: false
    };

    service.deleteCard(mockCardToDelete).subscribe((res: any) => {
      expect(res).toEqual(Object({}));
    });

    const req = httpMock.expectOne(service.apiRoot + '/Flashcard/DeleteCards');
    expect(req.request.method).toBe('DELETE');
    expect(req.request.body).toEqual(mockCardToDelete);
    req.flush(Object({}));
  });

  it('should create a card', () => {
    const mockCardToCreate: Flashcard = {
      cardID: 1,
      category: '',
      dayCreated: new Date,
      prompt: '',
      answer: '',
      show: false
    };

    service.createCard(mockCardToCreate).subscribe((res: any) => {
      expect(res).toEqual(Object({}));
    });

    const req = httpMock.expectOne(service.apiRoot + '/Flashcard/CreateCards');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockCardToCreate);
    req.flush(Object({}));
  });
});
