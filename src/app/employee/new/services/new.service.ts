import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  private url = ENVIRONMENT;

  constructor( private http: HttpClient ) { }

  public createEmployee(body): Observable<any> {
    return this.http.post<any>(this.url, body);
  }
}
