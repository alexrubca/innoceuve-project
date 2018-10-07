import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient ) { }

  private url = ENVIRONMENT + 'getall';

  getEmployeesList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
