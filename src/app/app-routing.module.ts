import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Accountform1Component } from './components/accountform1/accountform1.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventMakerComponent } from './components/event-maker/event-maker.component';
import { LoginComponent } from './components/login/login.component';
import { SensoredComponent } from './components/sensored/sensored.component';

import { LoginsensComponent } from './components/loginsens/loginsens.component';
import { FormsensComponent } from './components/formsens/formsens.component';

import { EmbedComponent } from './components/embed/embed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form1', component: Accountform1Component },
  { path: 'login', component: LoginComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'event-maker', component: EventMakerComponent },
  { path: 'sensored', component: SensoredComponent },
  // { path: 'sensored/login', component: LoginsensComponent },
  // { path: 'sensored/form', component: FormsensComponent },
  // { path: 'embed', component: EmbedComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
