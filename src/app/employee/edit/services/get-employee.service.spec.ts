import { TestBed } from '@angular/core/testing';

import { GetEmployeeService } from './get-employee.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('GetEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: GetEmployeeService = TestBed.get(GetEmployeeService);
    expect(service).toBeTruthy();
  });
});
