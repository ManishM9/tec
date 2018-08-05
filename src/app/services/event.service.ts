import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Event } from '../models/Event';
import { EventPerson } from '../models/EventPerson';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class EventService {
  events: Observable<Event[]>;

  constructor(private http: HttpClient) { }

  getEvents(month: number, year: number): Observable<Event[]>{
    return this.http.get<Event[]>("/api/event/get/"+month+"/"+year);
  }

  saveEvent(event: Event):Observable<Event>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Event>("/api/event/post", event, httpOptions);
  }

  // test(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   const da = {
  //     user: 'yolo',
  //   }
  //   this.http.post<any>("/api/test", da, httpOptions).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  // test2(){
  //   this.http.get<any>("/api/testo").subscribe(data => {
  //     console.log(data);
  //   });
  // }


}