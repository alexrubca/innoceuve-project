import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../app.constants';
import { Employee } from 'src/app/employee/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor( private http: HttpClient ) { }

  public getEmployeesList(): Observable<Employee[]> {
    const url = ENVIRONMENT;

    return this.http.get<Employee[]>(url);
  }

  public removeEmployee(id): Observable<Employee[]> {
    const url = ENVIRONMENT + '/' + id;

    return this.http.delete<Employee[]>(url);
  }
}
