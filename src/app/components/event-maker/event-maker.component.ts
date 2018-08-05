import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/Event';
import { EventPerson } from '../../models/EventPerson';

import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-maker',
  templateUrl: './event-maker.component.html',
  styleUrls: ['./event-maker.component.css']
})
export class EventMakerComponent implements OnInit {
  eventpersons: EventPerson[] = [{
    name: '',
    topic: '',
    responsibilities: null,
  },
  {
    name: '',
    topic: '',
    responsibilities: null,
  }];
  eventpersonc: EventPerson[] = [{
    name: '',
    topic: null,
    responsibilities: '',
  },];
  event: Event = {
    title: 'title',
    description: '',
    date: null,
    speakers: this.eventpersons,
    coordinators: this.eventpersonc,
    images: ['']
  };

  constructor(private eventService: EventService) { }

  ngOnInit() {
    // this.eventService.test();
    // setTimeout(this.eventService.test2(),3000);
    // this.eventService.test2();
  }

  addspeaker(){
    this.eventpersons.push({
      name: '',
      topic: '',
      responsibilities: null,
    });
  }

  delspeaker(){
    this.eventpersons.pop();
  }

  addcoordinator(){
    this.eventpersonc.push({
      name: '',
      topic: null,
      responsibilities: '',
    });
  }

  delcoordinator(){
    this.eventpersonc.pop();
    // this.eventService.getEvents(this.currdate.getMonth(), this.currdate.getFullYear()).subscribe(data2 => {
    //   console.log(data2);
    // });
  }

  submit(){
    console.log(this.event);
    this.eventService.saveEvent(this.event).subscribe(data => {
      console.log(data);
    });
  }


}
