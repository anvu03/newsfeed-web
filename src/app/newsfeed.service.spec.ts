import { TestBed } from '@angular/core/testing';

import { NewsfeedService } from './newsfeed.service';
import { HttpClient } from '@angular/common/http';

describe('NewsfeedService', () => {
  let service: NewsfeedService;
  let httpClientStub: Partial<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientStub,
        },
      ],
    });
    service = TestBed.inject(NewsfeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
