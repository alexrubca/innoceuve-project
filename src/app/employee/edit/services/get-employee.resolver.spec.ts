import { TestBed } from '@angular/core/testing';

import { GetEmployeeResolver } from './get-employee.resolver';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('GetEmployeeResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ],
    providers: [ GetEmployeeResolver ]
  }));

  it('should be created', () => {
    const service: GetEmployeeResolver = TestBed.get(GetEmployeeResolver);
    expect(service).toBeTruthy();
  });
});
