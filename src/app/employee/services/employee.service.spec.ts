import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
