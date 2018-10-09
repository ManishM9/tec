import { Component, OnInit } from '@angular/core';

import { AccountformService } from '../../services/accountform.service';
import { LoginService } from '../../services/login.service';
import { AdminService } from '../../services/admin.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-accountform1',
  templateUrl: './accountform1.component.html',
  styleUrls: ['./accountform1.component.css']
})
export class Accountform1Component implements OnInit {
  validate: boolean = false;
  invalid_reg: boolean = false;
  name: string = "";
  email: string = "";
  reg_no: string = "";
  admin: boolean = false;

  constructor(private accountFromService: AccountformService, private loginService: LoginService, private adminService: AdminService) { }

  ngOnInit() {
    this.loginService.checkAdmin().subscribe(data => {
      // console.log(data);
      this.admin = data;
    })
  }

  acp(){
    this.adminService.acp().subscribe(data => {
      if(data){
        console.log("ACP Initiated");
      }
    });
  }

  submit(e: any){
    e.preventDefault();
    this.validate = true;
    // console.log("submitted");
    var regexp = new RegExp(/1[4-7][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
    if(!(regexp.test(this.reg_no))){
      this.invalid_reg = true;
    }
    if(this.name.length<30 && this.name !== "" && this.email.length<40 && this.email !== "" && this.reg_no.length === 9 && regexp.test(this.reg_no)){
      // var regexp = new RegExp(/1[4-7][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
      // var regexp = new RegExp(/[0-9]/);
      

      this.accountFromService.postAccount({ name: this.name, email: this.email, reg_no: this.reg_no }).subscribe(data => {
        console.log(data);
        if(data){
          this.name = "";
          this.email = "";
          this.reg_no = "";
          alert("Form Submitted!");
          this.validate = false;
        }
      });

    }
  }

}