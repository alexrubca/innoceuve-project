import { TestBed } from '@angular/core/testing';

import { EmployeeResolver } from './employee.resolver';

describe('EmployeeResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeResolver = TestBed.get(EmployeeResolver);
    expect(service).toBeTruthy();
  });
});
