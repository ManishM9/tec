import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/Event';
import { EventPerson } from '../../models/EventPerson';

import { EventService } from '../../services/event.service';

// declare var NodeCalendar: any;
import * as NodeCalendar from 'node-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  rows: Number[] = [1,2,3,4,5];
  cols: Number[] = [1,2,3,4,5,6,7]
  currentEvent: boolean = false;
  currentEventd: Event;
  currdate: Date = new Date(Date.now());
  currcal = [];
  currevents = [];
  dataready: boolean = false;

  constructor( private eventService: EventService) { }

  ngOnInit() {
    // console.log(new NodeCalendar.Calendar(6).itermonthdays(2018,8));
    this.currentEventd = {
      title: 'Title',
      description: 'Description',
      speakers: [ {name: 'Speaker1'} ],
      coordinators: [ {name: 'Coordinator1'} ],
      date: new Date(Date.now()),
      images: [ 'imageURL', ],
    }
    // console.log(this.currdate.getMonth());
    // console.log(this.currdate.getFullYear());
    this.currcal = new NodeCalendar.Calendar(5).itermonthdays(this.currdate.getFullYear(), this.currdate.getMonth()+1);
    this.eventService.getEvents(this.currdate.getMonth()+1, this.currdate.getFullYear()).subscribe(data => {
      console.log(data);
      this.currevents = data;
      this.dataready = true;
    });
  }

  isEvent(e: number): boolean{
    let ans = false;
    this.currevents.forEach(element => {
      // console.log(e);
      if((new Date(element.date).getDate()) === e){
        // console.log("Success");
        ans = true;
      }
    });
    return(ans);
  }

  showEvent(e){
    this.currevents.forEach(element => {
      if((new Date(element.date).getDate()) === e){
        this.currentEvent = !this.currentEvent;
        this.currentEventd = element;
      }
    });
  }

}
