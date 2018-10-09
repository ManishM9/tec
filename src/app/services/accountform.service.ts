import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class AccountformService {

  constructor(private http: HttpClient) { }

  postAccount(obj: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>('api/accountform1', obj, httpOptions);
  }

  //final-------------------------------------------------
  checkAccountMid(aid: string): Observable<any>{
    return this.http.get<any>(`api/accountform/${aid}`);
  }

  postAccountfinal(aid: string, obj: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(`api/accountsubmit/${aid}`, obj, httpOptions);
  }

  getAccountsfinal(): Observable<any>{
    return this.http.get<any>('api/getaccounts');
  }

  updateClearance(reg_no: string, clearance: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(`api/updateclearance/${reg_no}`, { clearance: clearance }, httpOptions);
  }

}
