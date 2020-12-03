import { TestBed } from '@angular/core/testing';

import { SneakerServiceService } from './sneaker-service.service';

describe('SneakerServiceService', () => {
  let service: SneakerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SneakerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
