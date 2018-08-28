import { Component, OnInit } from '@angular/core';

import { AccountformService } from '../../services/accountform.service';

@Component({
  selector: 'app-accountform1',
  templateUrl: './accountform1.component.html',
  styleUrls: ['./accountform1.component.css']
})
export class Accountform1Component implements OnInit {
  validate: boolean = false;
  name: string = "";
  email: string = "";
  reg_no: string = "";

  constructor(private accountFromService: AccountformService) { }

  ngOnInit() {
  }

  submit(e: any){
    e.preventDefault();
    this.validate = true;
    // console.log("submitted");
    var regexp = new RegExp(/1[4-7][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
    if(this.name.length<30 && this.name !== "" && this.email.length<30 && this.email !== "" && this.reg_no.length === 9 && regexp.test(this.reg_no)){
      // var regexp = new RegExp(/1[4-7][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
      // var regexp = new RegExp(/[0-9]/);
      // if(regexp.test(this.reg_no)){
      //   console.log("Validated!");
      // }

      this.accountFromService.postAccount({ name: this.name, email: this.email, reg_no: this.reg_no }).subscribe(data => {
        console.log(data);
        if(data){
          this.name = "";
          this.email = "";
          this.reg_no = "";
          alert("Form Submitted!");
        }
      });

    }
  }

}
