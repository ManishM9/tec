import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventMakerComponent } from './components/event-maker/event-maker.component';
import { EventService } from './services/event.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { Accountform1Component } from './components/accountform1/accountform1.component';
import { AccountformService } from './services/accountform.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventMakerComponent,
    HomeComponent,
    LoginComponent,
    Accountform1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [EventService, AccountformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
