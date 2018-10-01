import { Component, OnInit } from '@angular/core';

import { SensoredService } from '../../services/sensored.service';

@Component({
  selector: 'app-loginsens',
  templateUrl: './loginsens.component.html',
  styleUrls: ['./loginsens.component.css']
})
export class LoginsensComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private sensoredService: SensoredService) { }

  ngOnInit() {
  }

  login(){
    // console.log(this.username);
    // console.log(this.password);
    this.sensoredService.login(this.username, this.password).subscribe(auth => {
      console.log(auth);
      if(auth === true){
        alert("Login Successful!");
      } else {
        alert("Wrong Credentials");
      }
    });
  }

}
