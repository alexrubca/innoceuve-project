import { TestBed } from '@angular/core/testing';

import { GetEmployeeResolver } from './get-employee.resolver';

describe('GetEmployeeResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetEmployeeResolver = TestBed.get(GetEmployeeResolver);
    expect(service).toBeTruthy();
  });
});
