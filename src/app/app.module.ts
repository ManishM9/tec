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
import { AdminService } from './services/admin.service';
import { SensoredComponent } from './components/sensored/sensored.component';
import { LoginsensComponent } from './components/loginsens/loginsens.component';
import { SensoredService } from './services/sensored.service';
import { FormsensComponent } from './components/formsens/formsens.component';
import { EmbedComponent } from './components/embed/embed.component';
import { AccountformfinalComponent } from './components/accountformfinal/accountformfinal.component';
import { MemhomeComponent } from './components/memhome/memhome.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventMakerComponent,
    HomeComponent,
    LoginComponent,
    Accountform1Component,
    SensoredComponent,
    LoginsensComponent,
    FormsensComponent,
    EmbedComponent,
    AccountformfinalComponent,
    MemhomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [EventService, AccountformService, AdminService, SensoredService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
