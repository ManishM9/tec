import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { element } from '../../../../node_modules/protractor';

// declare var scrollIntoView: any;
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { resolve } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("grad", [
      transition('void => *', [
        // style({ background: ' linear-gradient(-213deg, #000000 0%, #2c3e50 74%)' }),
        animate('500ms ease-in', keyframes([
          style({ opacity: 1, background: ' linear-gradient(to left top, #000000 0%, #2c3e50 74%)', offset: 0 }),
          style({ opacity: 0.5, background: ' linear-gradient(to left top, #000000 0%, #2c3e50 74%)', offset: 0.5 }),
          style({ opacity: 0, background: ' linear-gradient(to left top, #000000 0%, #2c3e50 74%)', offset: 1 })
        ]))
      ])
    ]),
    trigger("grad2", [
      transition('void => *', [
        animate('500ms ease-in', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 0.5, offset: 0.5}),
          style({opacity: 1, offset: 1}),
        ]))
      ])
    ]),
    trigger("turn1", [
      // transition("void => null", [
      //   animate('0ms ease-in', keyframes([
      //     style({ transform: 'skewy(0deg)', offset:1 })
      //   ]))
      // ]),
      state("null", style({
        transform: 'skewY(0deg)',
      })),
      state("lalala", style({
        transform: 'skewY(-4deg)',
      })),
      transition("null => *", [
        animate('500ms ease-in', keyframes([
          // style({  }),
          style({ transform: 'skewY(0deg)', offset:0 }),
          style({ transform: 'skewY(-4deg)', offset: 1 })
        ]))
      ])
    ]),
    trigger("turn2", [
      state("null", style({
        transform: 'skewY(0deg)',
      })),
      state("lalala", style({
        transform: 'skewY(-4deg)',
      })),
      transition("null => *", [
        animate('500ms ease-in', keyframes([
          style({ transform: 'skewY(0deg)', offset:0 }),
          style({ transform: 'skewY(-4deg)', offset: 1 })
        ]))
      ])
    ]),
    trigger("turn3", [
      state("null", style({
        transform: 'skewY(0deg)',
      })),
      state("lalala", style({
        transform: 'skewY(4deg)',
      })),
      transition("null => *", [
        animate('500ms ease-in', keyframes([
          style({ transform: 'skewY(0deg)', offset:0 }),
          style({ transform: 'skewY(4deg)', offset: 1 })
        ]))
      ])
    ]),
    trigger("turn4", [
      state("null", style({
        transform: 'skewY(0deg)',
      })),
      state("lalala", style({
        transform: 'skewY(-4deg)',
      })),
      transition("null => *", [
        animate('500ms ease-in', keyframes([
          style({ transform: 'skewY(0deg)', offset:0 }),
          style({ transform: 'skewY(-4deg)', offset: 1 })
        ]))
      ])
    ]),
    trigger("event1", [
      state("inactive", style({
        transform: 'scale(1) rotate(+45deg)',
      })),
      state("active", style({
        transform: 'scale(1.4) rotate(+45deg)',
      })),
      state("de-active", style({
        transform: 'scale(0.5) rotate(+45deg)',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition('* => active', [
        animate('500ms ease-in')
      ]),
      transition('* => inactive', [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ])
    ]),
    trigger("event2", [
      state("inactive", style({
        transform: 'scale(1) rotate(+45deg)',
      })),
      state("active", style({
        transform: 'scale(1.4) rotate(+45deg)',
      })),
      state("de-active", style({
        transform: 'scale(0.5) rotate(+45deg)',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition('* => active', [
        animate('500ms ease-in')
      ]),
      transition('* => inactive', [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ])
    ]),
    trigger("event3", [
      state("inactive", style({
        transform: 'scale(1) rotate(+45deg)',
      })),
      state("active", style({
        transform: 'scale(1.4) rotate(+45deg)',
      })),
      state("de-active", style({
        transform: 'scale(0.5) rotate(+45deg)',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition('* => active', [
        animate('500ms ease-in')
      ]),
      transition('* => inactive', [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ])
    ]),
    trigger("event4", [
      state("inactive", style({
        transform: 'scale(1) rotate(+45deg)',
      })),
      state("active", style({
        transform: 'scale(1.4) rotate(+45deg)',
      })),
      state("de-active", style({
        transform: 'scale(0.5) rotate(+45deg)',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition('* => active', [
        animate('500ms ease-in')
      ]),
      transition('* => inactive', [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ])
    ]),
    trigger("event5", [
      state("inactive", style({
        transform: 'scale(1) rotate(+45deg)',
      })),
      state("active", style({
        transform: 'scale(1.4) rotate(+45deg)',
      })),
      state("de-active", style({
        transform: 'scale(0.5) rotate(+45deg)',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition('* => active', [
        animate('500ms ease-in')
      ]),
      transition('* => inactive', [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ])
    ]),
    trigger("event6", [
      state("inactive", style({
        transform: 'scale(1) rotate(+45deg)',
      })),
      state("active", style({
        transform: 'scale(1.4) rotate(+45deg)',
      })),
      state("de-active", style({
        transform: 'scale(0.5) rotate(+45deg)',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition('* => active', [
        animate('500ms ease-in')
      ]),
      transition('* => inactive', [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ])
    ]),
    trigger("proj1", [
      state("inactive", style({
        width: '25%',
        // height: '100%',
      })),
      state('active', style({
        width: '55%',
        // height: '150%',
      })),
      state('de-active-s', style({
        width: '15%',
        // height: '150%',
        opacity: 0.2,
      })),
      state('de-active-d', style({
        // height: '50%',
        width: '25%',
        opacity: 0.2,
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition('null => inactive', [
        animate('500ms ease-in')
      ]),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-s", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-d", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("proj2", [
      state("inactive", style({
        width: '25%',
        // height: '100%',
      })),
      state('active', style({
        width: '55%',
        // height: '150%',
      })),
      state('de-active-s', style({
        width: '15%',
        // height: '150%',
        opacity: 0.2,
      })),
      state('de-active-d', style({
        // height: '50%',
        width: '25%',
        opacity: 0.2,
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('null => inactive', [
        animate('500ms ease-in')
      ]),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-s", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-d", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("proj3", [
      state("inactive", style({
        width: '25%',
        // height: '100%',
      })),
      state('active', style({
        width: '55%',
        // height: '150%',
      })),
      state('de-active-s', style({
        width: '15%',
        // height: '150%',
        opacity: 0.2,
      })),
      state('de-active-d', style({
        // height: '50%',
        width: '25%',
        opacity: 0.2,
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('null => inactive', [
        animate('500ms ease-in')
      ]),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-s", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-d", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("proj4", [
      state("inactive", style({
        width: '25%',
        // height: '100%',
      })),
      state('active', style({
        width: '55%',
        // height: '150%',
      })),
      state('de-active-s', style({
        width: '15%',
        // height: '150%',
        opacity: 0.2,
      })),
      state('de-active-d', style({
        // height: '50%',
        width: '25%',
        opacity: 0.2,
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('null => inactive', [
        animate('500ms ease-in')
      ]),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-s", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-d", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("proj5", [
      state("inactive", style({
        width: '25%',
        // height: '100%',
      })),
      state('active', style({
        width: '55%',
        // height: '150%',
      })),
      state('de-active-s', style({
        width: '15%',
        // height: '150%',
        opacity: 0.2,
      })),
      state('de-active-d', style({
        // height: '50%',
        width: '25%',
        opacity: 0.2,
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('null => inactive', [
        animate('500ms ease-in')
      ]),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-s", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-d", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("proj6", [
      state("inactive", style({
        width: '25%',
        // height: '100%',
      })),
      state('active', style({
        width: '55%',
        // height: '150%',
      })),
      state('de-active-s', style({
        width: '15%',
        // height: '150%',
        opacity: 0.2,
      })),
      state('de-active-d', style({
        // height: '50%',
        width: '25%',
        opacity: 0.2,
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('null => inactive', [
        animate('500ms ease-in')
      ]),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-s", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-d", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("proj7", [
      state("inactive", style({
        width: '25%',
        // height: '100%',
      })),
      state('active', style({
        width: '55%',
        // height: '150%',
      })),
      state('de-active-s', style({
        width: '15%',
        // height: '150%',
        opacity: 0.2,
      })),
      state('de-active-d', style({
        // height: '50%',
        width: '25%',
        opacity: 0.2,
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('null => inactive', [
        animate('500ms ease-in')
      ]),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-s", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-d", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("proj8", [
      state("inactive", style({
        width: '25%',
        // height: '100%',
      })),
      state('active', style({
        width: '55%',
        // height: '150%',
      })),
      state('de-active-s', style({
        width: '15%',
        // height: '150%',
        opacity: 0.2,
      })),
      state('de-active-d', style({
        // height: '50%',
        width: '25%',
        opacity: 0.2,
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('null => inactive', [
        animate('500ms ease-in')
      ]),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-s", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active-d", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("uprow", [
      state("inactive", style({
        height: '50%',
      })),
      state("active", style({
        height: '75%',
      })),
      state("de-active", style({
        height: '25%'
      })),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("downrow", [
      state("inactive", style({
        height: '50%',
      })),
      state("active", style({
        height: '75%',
      })),
      state("de-active", style({
        height: '25%'
      })),
      transition("* => inactive", [
        animate('300ms ease-in')
      ]),
      transition("* => active", [
        animate('300ms ease-in')
      ]),
      transition("* => de-active", [
        animate('300ms ease-in')
      ]),
    ]),
    trigger("b1", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b2", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b3", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b4", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b5", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b6", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b7", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b8", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b9", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("b10", [
      state("inactive", style({
        borderRadius: '50%',
        transform: 'scale(1)',
      })),
      state("active", style({
        borderRadius: '10%',
        // transform: 'scale(1.5)',
      })),
      state("de-active", style({
        transform: 'scale(0.7)',
        borderRadius: '50%',
      })),
      state("null", style({
        transform: 'scale(0.001)',
      })),
      transition('* => null', [
        animate('0ms ease-in')
      ]),
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
    ]),
    trigger("eventdes", [
      state("null", style({
        transform: 'translateY(200px)'
      })),
      state("active", style({
        transform: 'translateY(0)'
      })),
      transition('null => active', [
        animate('400ms ease-in')
      ]),
      transition('active => null', [
        animate('0ms ease-in')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  // images:string[] = ['../../../assets/images/logo.png', '../../../assets/images/gokul_search2.jpeg','../../../assets/images/gokul_search.jpeg'];
  // activeImage = { url:'', state:'', pos:0 };
  // activeImage2 = { url:'', state:'', pos:1 };
  // introState:string = '';
  // carBack:string = '';
  @ViewChild('start') start: ElementRef;
  @ViewChild('carousel') carousel: ElementRef;
  @ViewChild('events') events: ElementRef;
  @ViewChild('aboutus') aboutus: ElementRef;
  @ViewChild('projects') projects: ElementRef;
  @ViewChild('board') board: ElementRef;
  @ViewChild('end') end: ElementRef;
  @ViewChild('sponsors') sponsors: ElementRef;
  pages: ElementRef[]= [];
  screens: string[] = ["start","carousel","events","aboutus","projects","board","sponsors","end"];
  offsets: number[] = [];
  // event1State: string = "inactive";
  // event2State: string = "inactive";
  // event3State: string = "inactive";
  // event4State: string = "inactive";
  // event5State: string = "inactive";
  // event6State: string = "inactive";
  gradstate: string = "";
  gradstate2: string = "";
  turnstate1: string = "null";
  turnstate2: string = "null";
  turnstate3: string = "null";
  turnstate4: string = "null";
  eventState: string[] = ["null","null","null","null","null","null"];
  eventActive: boolean = false;
  projState: string[] = ["null","null","null","null","null","null","null","null"];
  projActive: boolean = false;
  rowState: string[] = ["inactive","inactive"];
  bState: string[] = ["null","null","null","null","null","null","null","null","null","null"];
  bActive: boolean = false;
  lastScrollTop: number = 0;
  inTransition: boolean = false;
  settime1: number = 400;
  settime2: number = 800;
  event = { title: '', desc: '' };
  eventsAll = [{title: 'SENSORED', desc: '\"SENSORED\", hosted by TEC, is one of the premier pre-GraVITas events. The event is a two-day technical workshop. The motive of the workshop is to get the beginners equipped with the field of embedded systems and sensor interfacing. Take-away kits consisting of everything a techie needs to start off in the world of electronics provided to the participants.\n We start with the very basic level explanation as to how various sensors actually work in the real world. Starting with the most basic knowledge of building simple circuits, running codes on Arduino Uno and interfacing it with more sensors to make a final embedded project of practical importance, we ensure to make every minute more exciting than the earlier as the inquisitive participants explore the kits containing breadboard, jumpers, LEDs, Potentiometer, Transistors, Resistors, Capacitors, Photo-Diodes, Ultrasonic sensor, Adxl, Piezo, DHT Sensor, IR emitter, Arduino Uno and all major essentials. We have been getting an overwhelming response to the workshop for the past three years in a row with a great turn-up and the participants leaving with a sense of fulfillment and quench for more. \“Our satisfaction is never satisfied\”. To add novelty to the 4th Edition of Sensored, we have planned to add basics of IoT this time by adding Bluetooth module to the list of components. At the end of the workshop, the participants leave home with a final project made by themselves for further learning.'}, {title: 'EMBED 4.0', desc: 'PCB is a workshop hosted by TEC with an aim to teach the participants all about Printed Circuit Boards. The participants are made aware of every small detail about PCB. From definitions to exploring career options in PCB, each topic will be duly addressed. The workshop starts with the designing of circuits, aided by the software-EAGLE. The participants will be taught simulation of the circuits, soon followed by fabrication of the circuits which they had designed themselves. It was fun while learning as the participants will have a hands-on experience imprinting designs, it’s etching and soldering of components. The hands-on session conducted will ensure effective learning of the concepts which further helps them in enhancing their skill set as well as in making their capstone (20 credits) projects in the most effective manner.\nPCB FABRICATION WORKSHOP has been renamed as EMBED 4.0 as it is the fourth edition of the workshop being hosted by TEC. To give the event an industrial incline, TEC is collaborating with Enthu Technologies Solutions India Pvt Ltd for Embed 4.0 in this GraVITas 2k18. Enthu is bringing their PCB prototyping machine to the event and have accepted to print all the participants boards. We also have external speakers this time to give a more practical insight of how printed boards are actually manufactured in large scale industries. This is definite to give the participants an industrial insight making the workshop more effective.'},
              {title:'GLITCH', desc:'\“Glitch\”- an online event was hosted by TEC-VIT on 17th and 18th of March. An online quiz with access granted to anyone who wishes to take part just made the weekend a total bonanza of learning and fun. It was a two-day online quiz with two rounds in all. The first round had basic riddles and tangled questions to which the final answer was something related to the field of electronics. The players with more questions solved in lesser time were awarded with points and given access to the next round where the level of hardness was further set higher. The winners were declared at the end of the quiz and were given electronic components (RPi) and RedWolf coupons as schwags. Yet another event which disrupted weekend naps and gained momentum overnight.'}, {title: '101/102', desc: 'The session begins with the primary aim of familiarizing the audience with VIT\’s great culture-the clubs and chapters functioning, the vast opportunities, the ample amount of time to accomplish the same, academics, faculties, placements and in whole the campus life at VIT. We shared our wonderful, brisk and dusky experiences with our young successors which was a great experience. In addition to this precious vast of knowledge , our main objective of this series \“E-LEXA\” is to impart the basic technological aspects of electronics as a beginner from scratch. Electronics 101 is the 1st and foremost opening event of this series, which highlights breadboards, leds, resistors, potentiometers and capacitors. The audience were enthralled to handle the different small components and understand their importance in the final circuits of elementary projects. At the end, a project display was conducted wherein the live demonstration of minor projects was done successfully as it gave a practical outlook to the event.\“Electronics 102\” was the 2nd episode of this series “E-lexa”. In this, we took the audience to a ride of switches, their different types-applications, ICs, transistors and finally a detailed explanation on motors.'}, {title: 'RASPBERRY PI SESSION', desc: 'It was one and half hour technical workshop on Raspberry pi. The audience was first given a brief introduction of raspberry pi and then they were taught about its installation process. Presentation was informative & visually appealing. Audience was given Raspberry Pi to have a closer look and had been taught about each and every part of it.\nAudience enjoyed controlling GPIO pins using their cell phones by operating them on the same network. For which WebIOPi was used.'}, {title: 'GITHUB', desc: 'The session on GitHub will cover the entire GitHub platform,its advantages to a technical mind and how it plays a role to develop a new generation Curriculum Vitae(RESUME) for programming oriented students as well as myriad domains. The session will be conducted in a big hall which will attract a crowd of 200+ people. Github is a platform which will be beneficial to a lot of young generation engineers in VIT of which most of them are unaware of.'}];
  screensActive = [false,false,false,false,false,false,false,false];
  eventdesState = "null";
  
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    // setTimeout(() =>{
    //   this.start.nativeElement.scrollIntoView({behavior: 'smooth'});
    //   console.log("Start");
    // }, 1000);
    this.pages = [this.start, this.carousel, this.events, this.aboutus, this.projects, this.board, this.sponsors, this.end];
    this.pages.forEach(element => {
      this.offsets.push(element.nativeElement.offsetTop);
    });
    // this.offsets.push(this.start.nativeElement.offsetTop);
    // this.offsets.push(this.carousel.nativeElement.offsetTop);
    // this.offsets.push(this.events.nativeElement.offsetTop);
    // this.offsets.push(this.aboutus.nativeElement.offsetTop);
    // this.offsets.push(this.projects.nativeElement.offsetTop);
    // this.offsets.push(this.board.nativeElement.offsetTop);
    // this.offsets.push(this.end.nativeElement.offsetTop);
    setTimeout(() => {
      // this.carousel.nativeElement.scrollIntoView({behavior: 'smooth'});
      const scrolling = scrollIntoViewIfNeeded<Promise<any>>(document.getElementById("carousel"), {
        behavior: actions => {
          return new Promise((resolve, rejected) => {
            scrollIntoViewIfNeeded(document.getElementById("carousel"), {
              behavior: 'smooth',
              block: 'start'
            });
            resolve();
          })
        },
      });
      scrolling.then(() => {
        console.log("YAAYYYY!!!!");
      });
      // console.log(typeof(scrollIntoViewIfNeeded));
      // console.log("Carousel");
      // console.log(this.carousel);
      console.log(this.offsets);
      console.log(this.pages);
    }, 2000);
  }

  // @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {
    // console.log(window.pageYOffset);
    // console.log("Scroll");
    setTimeout(() => {
      let st = window.pageYOffset;
      let up = false;
      if (st > this.lastScrollTop) {
        // console.log("down");
        up = false;
      } else {
        // console.log("up");
        up = true;
      }
      this.lastScrollTop = st;
      
      let curr = -1;
      this.offsets.forEach((element,index) => {
        if(element < st && this.offsets[index+1] > st){
          // if(up){
          //   if(index != 0){
          //     this.pages[index-1].nativeElement.scrollIntoView({ behavior: 'smooth' });
          //     console.log(`${this.pages[index-1]} up`);
          //   }
          // } else {
          //   if(index != this.pages.length-1){
          //     this.pages[index+1+1].nativeElement.scrollIntoView({ behavior: 'smooth' });
          //     console.log(`${this.pages[index+1]} down`);
          //   }
          // }
          curr = index;
        }
      });
      if(up && !this.inTransition){
        if(curr != 0){
          // this.pages[curr].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
          const scrolling1 = scrollIntoViewIfNeeded<Promise<any>>(document.getElementById(this.screens[curr]), {
            behavior: actions => {
              return new Promise((resolve, rejected) => {
                scrollIntoViewIfNeeded(document.getElementById(this.screens[curr]), {
                  behavior: 'smooth',
                  block: 'start'
                });
                // activatePage()
                setTimeout(() => {
                  resolve();
                }, this.settime2);
                // resolve();
              })
            },
          });
          this.inTransition = true;
          scrolling1.then(() => {
            this.inTransition = false;
            if(this.screensActive[curr] === false){
              this.activatePage(this.screens[curr]);
            }
          });
          // this.resetTransition(700);
          // setTimeout(() => {
          //   this.inTransition = false;
          // })
          console.log(`${this.pages[curr-1]} up`);
        }
      } else if(!up && !this.inTransition) {
      // if(!up){
        if(curr != this.pages.length){
          // this.pages[curr+1].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
          const scrolling2 = scrollIntoViewIfNeeded<Promise<any>>(document.getElementById(this.screens[curr+1]), {
            behavior: actions => {
              return new Promise((resolve, rejected) => {
                scrollIntoViewIfNeeded(document.getElementById(this.screens[curr+1]), {
                  behavior: 'smooth',
                  block: 'start'
                });
                setTimeout(() => {
                  resolve();
                }, this.settime2);
                // resolve();
              })
            },
          });
          this.inTransition = true;
          scrolling2.then(() => {
            this.inTransition = false;
            if(this.screensActive[curr+1] === false){
            this.activatePage(this.screens[curr+1]);
            }
          });
          // this.resetTransition(700);
          console.log(this.pages[curr+1]);
        }
      }
      // else {
      //   console.log("=========================================================");
      //   // this.resetTransition(0);
      // }
    }, this.settime1);

  }

  goto(s: string){
    scrollIntoViewIfNeeded(document.getElementById(s), {behavior: 'smooth', block: 'start'});
  }

  activatePage(s: string){
    switch(s){
      case "events":
              this.eventState = ["inactive","inactive","inactive","inactive","inactive","inactive"];
              this.turnstate1 = "lalala";
              break;
      case "projects":
              this.projState = ["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive"];
              this.turnstate2 = "lalala";
              break;
      case "board":
              this.bState = ["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive"];
              this.turnstate3 = "lalala";
              break;
      case "sponsors":
              this.turnstate4 = "lalala";
              break;
    }
  }

  resetTransition(n: number){
    setTimeout(() => {
      this.inTransition = false;
    }, n);
  }

  activate(n: number){
    // console.log(`Clicked ${n}`);
    if(this.eventActive){
      this.deactivate();
      this.eventActive = false;
    } else {
      this.eventState.forEach((element,index) => {
        if(index === n){
          this.eventState[index] = "active";
          this.event = this.eventsAll[index];
          this.eventdesState = "active";
          this.eventActive = true;
        } else {
          this.eventState[index] = "de-active";
        }
      });
    }
  }

  deactivate(){
    this.eventState = ["inactive","inactive","inactive","inactive","inactive","inactive"];
    this.event = {title: '', desc: ''};
    this.eventdesState = "null";
  }

  pactivate(n: number){
    if(this.projActive){
      this.pdeactivate();
      this.projActive = false;
    } else {
      let lower = false;
      if(n<4){
        lower = true;
      }
      this.projState.forEach((element,index) => {
        if(index<4){
          if(lower){
            this.rowState[0] = "active";
            this.rowState[1] = "de-active";
            setTimeout(() => {
              this.projState[index] = 'de-active-s';
            if(index === n){
              this.projState[index] = 'active';
            }
            }, );
          } else {
            this.rowState[1] = "active";
            this.rowState[0] = "de-active";
            setTimeout(() => {
              this.projState[index] = 'de-active-d';
              if(index === n){
                this.projState[index] = 'active';
              }
            }, );
          }
        } else {
          if(lower){
            this.rowState[0] = "active";
            this.rowState[1] = "de-active";
            setTimeout(() => {
              this.projState[index] = 'de-active-d';
              if(index === n){
                this.projState[index] = 'active';
              }
            }, );
          } else {
            this.rowState[1] = "active";
            this.rowState[0] = "de-active";
            setTimeout(() => {
              this.projState[index] = 'de-active-s';
              if(index === n){
                this.projState[index] = 'active';
              }
            }, );
          }
        }
      });
      this.projActive = true;
    }
  }

  pdeactivate(){
    setTimeout(() => {
      this.projState = ["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive"];
    }, );
    this.rowState = ["inactive","inactive"];
  }

  bactivate(n: number){
    if(this.bActive){
      this.bdeactivate();
      this.bActive = false;
    } else {
      this.bState.forEach((element,index) => {
        if(n === index){
          this.bState[index] = "active";
        } else {
          this.bState[index] = "de-active";
        }
      });
      this.bActive = true;
    }
  }

  bdeactivate(){
    this.bState = ["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive"];
  }

  // ngAfterViewInit() {
  //   this.testing.nativeElement.focus();
  // }

  // test(){
  //   this.introState = 'animate';
  //   this.carBack = 'animate';
  // }

  // carouselsetup(){
  //   this.activeImage.url = this.images[this.activeImage.pos];
  //   this.activeImage.state = 'active';

  //   this.activeImage2.url = this.images[this.activeImage2.pos];
  //   this.activeImage2.state = 'back';
  // }

  // animate(){
  //   this.activeImage.state = 'back';
  //   this.activeImage2.state = 'active';

  //   this.activeImage.pos += 1;
  //   this.activeImage2.pos += 1;

  //   setTimeout(() => {
  //     this.changepics();
  //   }, 300);
  //   // this.changepics();
  // }

  // changepics(){

  //   if(this.activeImage.pos >= this.images.length){
  //     this.activeImage.pos=0;
  //   }
  //   if(this.activeImage2.pos >= this.images.length){
  //     this.activeImage2.pos=0;
  //   }

  //   this.activeImage.url = ''
  //   this.activeImage.state = this.activeImage.state==='active' ? 'back' : 'active';
  //   this.activeImage.url = this.images[this.activeImage.pos];
  //   this.activeImage2.url = ''
  //   this.activeImage2.state = this.activeImage2.state==='active' ? 'back' : 'active';
  //   this.activeImage2.url = this.images[this.activeImage2.pos];
  // }

}





// animations: [
//   trigger('intro1', [
//     state('spawn', style({
//       transform: 'translateY(280px) scale(3)',
//     })),
//     state('animate', style({
//       transform: 'translateY(0px)',
//       background: '#343a40',
//     })),
//     transition('spawn => animate', animate("500ms 100ms ease-in")),
//   ]),
//   trigger('carousel-background', [
//     state("spawn", style({
//       opacity: 0.5,
//       background: '#343a40'
//     })),
//     state('animate', style({
//       opacity: 1
//     })),
//     transition("spawn => animate", animate("500ms 100ms ease-in")),
//   ])
// ]