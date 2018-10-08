import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { Employee } from 'src/app/employee/models/employee.model';

@Injectable()
export class EmployeeResolver implements Resolve<Observable<Employee[]>> {
  constructor( private employeeSrv: EmployeeService ) {}

  resolve() {
    return this.employeeSrv.getEmployeesList();
  }
}
