import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VotlistService {
  name: string = "";
  reg_no: string = "";
  valid: boolean = false;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.loginService.getName().subscribe(name => {
      if(name !== false){
        this.name = name.name;
      }
    });
    this.loginService.getRegNo().subscribe(data => {
      this.reg_no = data.reg_no;
    })
  }

  getVoting(): Observable<any> {
    // this.loginService.getName().subscribe(data => {
    //   if(data !== ""  && data !== undefined){
    //     this.name = data;
    //   }
    // });
    // while(this.name === ""){
    //   let x = 1;
    // }
    return this.http.get<any>("api/getvoting");
  }

  postVoting(obj): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>("api/postvoting", obj, httpOptions);
  }


}
