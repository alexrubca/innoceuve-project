import { TestBed } from '@angular/core/testing';

import { UpdateService } from './update.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: UpdateService = TestBed.get(UpdateService);
    expect(service).toBeTruthy();
  });
});
