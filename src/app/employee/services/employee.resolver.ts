import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeResolver implements Resolve<Observable<any>> {
  constructor( private employeeSrv: EmployeeService ) {}

  resolve() {
    return this.employeeSrv.getEmployeesList();
  }
}
