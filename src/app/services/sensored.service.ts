import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class SensoredService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Boolean>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Boolean>("/apiapp/login", { username: username, password: password }, httpOptions);
  }

  formsubmit(obj): Observable<Boolean>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Boolean>("/apiapp/formsubmit", obj, httpOptions);
  }

}
