import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../app.constants';
import { Employee } from 'src/app/employee/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService {
  constructor( private http: HttpClient ) { }

  public getEmployee(id): Observable<Employee> {
    const url = ENVIRONMENT + 'get' + '?id=' + id;

    return this.http.get<Employee>(url);
  }
}
