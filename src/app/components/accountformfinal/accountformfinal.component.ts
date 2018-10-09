import { Component, OnInit } from '@angular/core';

import { AccountformService } from '../../services/accountform.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountformfinal',
  templateUrl: './accountformfinal.component.html',
  styleUrls: ['./accountformfinal.component.css']
})
export class AccountformfinalComponent implements OnInit {
  yearite: number;
  pass1: string;
  pass2: string;
  validate: boolean = false;
  visible: boolean = false;
  aid: string = '';
  admin: boolean = false;
  accounts: any = {};

  constructor(private accountFormService: AccountformService, private route: ActivatedRoute, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.aid = this.route.snapshot.paramMap.get('aid');
    this.accountFormService.checkAccountMid(this.aid).subscribe(data => {
      this.visible = data;
    });
    this.loginService.checkAdmin().subscribe(data => {
      this.admin = data;
    });
    this.accountFormService.getAccountsfinal().subscribe(data => {
      this.accounts = data;
      this.accounts.forEach(account => {
        account.newClearance = '';
      });
    });
  }

  submit(e) {
    e.preventDefault();
    if((this.yearite===2 || this.yearite===3 || this.yearite===4) && this.pass1 === this.pass2 && this.pass1.length>=8 && this.pass2.length>=8){
      this.validate = false;
      this.accountFormService.postAccountfinal(this.aid, { yearite: this.yearite, password: this.pass1 }).subscribe(data => {
        console.log(data);
        if(data){
          alert("Success");
          this.router.navigate(['/login']);
        } else {
          alert("Server Error");
        }
      });
    } else {
      this.validate = true;
      alert("Please fill correct details");
    }
  }

  update(reg_no: string, i: number){
    // this.accountFormService.updateClearance(reg_no, )
    // alert(`Regno: ${reg_no}, clearance: ${this.accounts[i].clearance}, new clearance: ${this.accounts[i].newClearance}`);
    this.accountFormService.updateClearance(reg_no, this.accounts[i].newClearance).subscribe(data => {
      alert(data);
      this.ngOnInit();
    });
  }

}