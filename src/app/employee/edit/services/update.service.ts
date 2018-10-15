import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private url = ENVIRONMENT;
  constructor( private http: HttpClient ) { }

  public updateEmployee(data): Observable<any> {
    return this.http.put<any>(this.url, data);
  }
}
