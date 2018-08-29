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

  getLogin(): Observable<boolean>{
    return this.http.get<any>("/api/loginch");
  }

}
