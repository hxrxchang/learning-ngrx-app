import { TestBed, inject } from '@angular/core/testing';

import { MockWebApiService } from './mock-web-api.service';

describe('MockWebApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockWebApiService]
    });
  });

  it('should be created', inject([MockWebApiService], (service: MockWebApiService) => {
    expect(service).toBeTruthy();
  }));
});
