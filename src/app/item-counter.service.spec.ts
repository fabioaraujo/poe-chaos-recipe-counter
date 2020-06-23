import { TestBed } from '@angular/core/testing';

import { ItemCounterService } from './item-counter.service';

describe('ItemCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemCounterService = TestBed.get(ItemCounterService);
    expect(service).toBeTruthy();
  });
});
