import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../app.constants';
import { Employee } from 'src/app/employee/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private param = sessionStorage.getItem('userId');
  private urlList = ENVIRONMENT + 'getall';
  private urlRemove = ENVIRONMENT + 'remove' + (this.param ? this.param : '');

  constructor( private http: HttpClient ) { }

  public getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlList);
  }

  public removeEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlRemove);
  }
}
