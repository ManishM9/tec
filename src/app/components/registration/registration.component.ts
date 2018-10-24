import { Component, OnInit } from '@angular/core';

import { AanvikService } from '../../services/aanvik.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  validate: boolean = false;
  invalid_reg: boolean = false;
  invalid_phno: boolean = false;
  invalid_name: boolean = false;
  name: string = "";
  email: string = "";
  reg_no: string = "";
  phno: number = 0;
  captcha: boolean = false;

  constructor(private aanvikService: AanvikService, private router: Router) { }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captcha = true;
  }

  submit(e: any) {
    e.preventDefault();
    this.validate = true;
    var regexp = new RegExp(/1[4-8][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
    if(!(regexp.test(this.reg_no))){
      this.invalid_reg = true;
    }
    if(String(this.phno).length !== 10){
      this.invalid_phno = true;
    }
    if(this.name.match(/\d+/g)){
      this.invalid_name = true;
    }
    if(this.captcha && !this.name.match(/\d+/g) && this.name.length<30 && this.name !== "" && this.email.length<40 && this.email !== "" && this.reg_no.length === 9 && regexp.test(this.reg_no) && String(this.phno).length === 10){
      this.aanvikService.register({ name: this.name, email: this.email, reg_no: this.reg_no, phno: this.phno }).subscribe(data => {
        console.log(data);
        if(data){
          this.name = "";
          this.email = "";
          this.reg_no = "";
          this.phno = 0;
          this.invalid_phno = false;
          this.invalid_reg = false;
          alert("Form Submitted!");
          this.router.navigate(['/aanvik']);
          this.validate = false;
        }
      });
    }

  }

}