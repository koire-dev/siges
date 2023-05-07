import { TestBed } from '@angular/core/testing';

import { TypePermissionService } from './type-permission.service';

describe('TypePermissionService', () => {
  let service: TypePermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
