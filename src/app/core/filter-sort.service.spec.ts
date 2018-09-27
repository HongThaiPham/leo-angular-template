import { TestBed, inject } from '@angular/core/testing';

import { FilterSortService } from './filter-sort.service';

describe('FilterSortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterSortService]
    });
  });

  it('should be created', inject([FilterSortService], (service: FilterSortService) => {
    expect(service).toBeTruthy();
  }));
});
