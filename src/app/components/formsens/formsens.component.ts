import { Component, OnInit } from '@angular/core';

import { SensoredService } from '../../services/sensored.service';

@Component({
  selector: 'app-formsens',
  templateUrl: './formsens.component.html',
  styleUrls: ['./formsens.component.css']
})
export class FormsensComponent implements OnInit {
  fname: string = '';
  lname: string = '';
  phno: number = 0;
  regno: string = '';

  constructor(private sensoredService: SensoredService) { }

  ngOnInit() {
  }

  submit() {
    // console.log(this.fname);
    // console.log(this.lname);
    // console.log(this.phno);
    // console.log(this.regno);
    var regexp = new RegExp(/1[4-7][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
    if(this.fname.length<30 && this.fname !== "" && this.lname.length<30 && this.lname !== "" && ((this.regno.length === 9 && regexp.test(this.regno)) || (this.regno === '')) && String(this.phno).length === 10){
      console.log("Validated");
      var obj_tosend = {
        fname: this.fname,
        lname: this.lname,
        phno: this.phno,
        regno: this.regno,
      };
      this.sensoredService.formsubmit(obj_tosend).subscribe(data => {
        console.log(data);
      });
    } else {
      alert("Please Enter all Correct Details.");
    }
  }

}