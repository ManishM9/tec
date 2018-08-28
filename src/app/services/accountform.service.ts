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

}
