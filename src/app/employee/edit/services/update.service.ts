import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../app.constants';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor( private http: HttpClient ) { }

  public updateEmployee(user, birthdate): Observable<any> {
    const date = moment(birthdate).toISOString();

    const url = ENVIRONMENT + 'create' + '?user=' + user + '&birthdate=' + date;

    return this.http.post<any>(url, {});
  }
}
