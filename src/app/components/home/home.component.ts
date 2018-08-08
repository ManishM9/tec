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
          style({opacity: 1, offset: 1})
        ]))
      ])
    ]),
    trigger("turn1", [
      transition("void => *", [
        animate('500ms ease-in', keyframes([
          style({ transform: 'skewY(0deg)', offset:0 }),
          style({ transform: 'skewY(-4deg)', offset: 1 })
        ]))
      ])
    ]),
    trigger("turn2", [
      transition("void => *", [
        animate('500ms ease-in', keyframes([
          style({ transform: 'skewY(0deg)', offset:0 }),
          style({ transform: 'skewY(-4deg)', offset: 1 })
        ]))
      ])
    ]),
    trigger("turn3", [
      transition("void => *", [
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
      transition("* => inactive", [
        animate('500ms ease-in')
      ]),
      transition("* => active", [
        animate('500ms ease-in')
      ]),
      transition("* => de-active", [
        animate('500ms ease-in')
      ]),
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
  pages: ElementRef[]= [];
  screens: string[] = ["start","carousel","events","aboutus","projects","board","end"]
  offsets: number[] = [];
  // event1State: string = "inactive";
  // event2State: string = "inactive";
  // event3State: string = "inactive";
  // event4State: string = "inactive";
  // event5State: string = "inactive";
  // event6State: string = "inactive";
  gradstate: string = "";
  gradstate2: string = "";
  turnstate1: string = "";
  turnstate2: string = "";
  turnstate3: string = "";
  eventState: string[] = ["inactive","inactive","inactive","inactive","inactive","inactive"];
  eventActive: boolean = false;
  projState: string[] = ["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive"];
  projActive: boolean = false;
  rowState: string[] = ["inactive","inactive"];
  bState: string[] = ["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive"];
  bActive: boolean = false;
  lastScrollTop: number = 0;
  inTransition: boolean = false;
  settime1: number = 400;
  settime2: number = 700;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    // setTimeout(() =>{
    //   this.start.nativeElement.scrollIntoView({behavior: 'smooth'});
    //   console.log("Start");
    // }, 1000);
    this.pages = [this.start, this.carousel, this.events, this.aboutus, this.projects, this.board, this.end];
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
                });
                setTimeout(() => {
                  resolve();
                }, this.settime2);
                // resolve();
              })
            },
          });
          this.inTransition = true;
          scrolling1.then(() => {this.inTransition = false});
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
                });
                setTimeout(() => {
                  resolve();
                }, this.settime2);
                // resolve();
              })
            },
          });
          this.inTransition = true;
          scrolling2.then(() => {this.inTransition = false});
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
          this.eventActive = true;
        } else {
          this.eventState[index] = "de-active";
        }
      });
    }
  }

  deactivate(){
    this.eventState = ["inactive","inactive","inactive","inactive","inactive","inactive"];
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