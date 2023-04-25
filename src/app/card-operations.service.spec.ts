import { TestBed } from '@angular/core/testing';

import { CardOperationsService } from './card-operations.service';

describe('CardOperationsService', () => {
  let service: CardOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
