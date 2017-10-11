import { TestBed, inject } from '@angular/core/testing';

import { ResortsService } from './resorts-service.service';

describe('ResortsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResortsService]
    });
  });

  it('should be created', inject([ResortsService], (service: ResortsService) => {
    expect(service).toBeTruthy();
  }));
});
