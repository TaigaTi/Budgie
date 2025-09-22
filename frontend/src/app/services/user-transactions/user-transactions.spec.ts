import { TestBed } from '@angular/core/testing';

import { UserTransactions } from './user-transactions';

describe('UserTransations', () => {
  let service: UserTransactions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTransactions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
