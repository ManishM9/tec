import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expoform',
  templateUrl: './expoform.component.html',
  styleUrls: ['./expoform.component.css']
})
export class ExpoformComponent implements OnInit {
  validate: boolean = false;
  invalid_reg: boolean = false;
  invalid_phno: boolean = false;
  invalid_domain: boolean = false;
  invalid_abstract: boolean = false;
  invalid_support: boolean = false;
  name: string = "";
  email: string = "";
  reg_no: string = "";
  phno: number = 0;
  domain: string = "none";
  abstract: File = undefined;
  support: File = undefined;

  constructor() { }

  ngOnInit() {
  }

  submit(e: any) {
    e.preventDefault();
    this.validate = true;
    var regexp = new RegExp(/1[4-7][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
    if(!(regexp.test(this.reg_no))){
      this.invalid_reg = true;
    }
    
  }

}