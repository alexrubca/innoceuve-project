import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  private url = ENVIRONMENT + 'create';

  constructor( private http: HttpClient ) { }

  public createEmployee(user, birthdate): Observable<any> {
    return this.http.post<any>(this.url, {user, birthdate});
  }
}
