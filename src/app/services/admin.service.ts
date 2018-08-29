import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

import { LoginService } from './login.service';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  acp(){
    // this.loginService.getLogin().subscribe(isAdmin => {
    //   const httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //   };
    //   if(isAdmin){
    //     return this.http.post<any>("/api/acp", {doit: true}, httpOptions);
    //   } else {
    //     return new Observable((observer) => {
    //       observer.next(false);
    //       observer.complete();
    //     });
    //   }
    // });
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>("api/acp", {doit: true}, httpOptions);
  }

}
