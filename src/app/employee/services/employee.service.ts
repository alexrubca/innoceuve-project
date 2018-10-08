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

  private url = ENVIRONMENT + 'getall';

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
