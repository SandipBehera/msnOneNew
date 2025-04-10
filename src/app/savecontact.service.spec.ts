import { TestBed } from '@angular/core/testing';

import { SavecontactService } from './savecontact.service';

describe('SavecontactService', () => {
  let service: SavecontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavecontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
