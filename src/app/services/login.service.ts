import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<boolean>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<any>("/api/login", { username: username, password: password }, httpOptions);
  }

  checkAdmin(): Observable<boolean>{
    return this.http.get<any>("/api/loginch");
  }

  getName(): Observable<any>{
    return this.http.get<any>("/api/getname");
  }

  getRegNo(): Observable<any>{
    return this.http.get<any>("/api/getregno");
  }

}
