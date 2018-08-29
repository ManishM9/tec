import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Accountform1Component } from './components/accountform1/accountform1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form1', component: Accountform1Component }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
