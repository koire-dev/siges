import { TestBed } from '@angular/core/testing';

import { TypePersonnelService } from './type-personnel.service';

describe('TypePersonnelService', () => {
  let service: TypePersonnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePersonnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
