import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetEmployeeService } from './get-employee.service';
import { Employee } from 'src/app/employee/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeResolver implements Resolve<Observable<Employee>> {
  constructor(
    private employeeSrv: GetEmployeeService,
    private router: Router
  ) {}

  resolve() {
    if (sessionStorage.getItem('userId')) {
      const id = sessionStorage.getItem('userId');
      return this.employeeSrv.getEmployee(id);
    } else {
      this.router.navigateByUrl('employee');
    }
  }
}
