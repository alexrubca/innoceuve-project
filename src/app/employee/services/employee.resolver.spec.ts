import { TestBed } from '@angular/core/testing';

import { EmployeeResolver } from './employee.resolver';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ],
    providers: [ EmployeeResolver ]
  }));

  it('should be created', () => {
    const service: EmployeeResolver = TestBed.get(EmployeeResolver);
    expect(service).toBeTruthy();
  });
});
