import { TestBed } from '@angular/core/testing';

import { NewService } from './new.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: NewService = TestBed.get(NewService);
    expect(service).toBeTruthy();
  });
});
