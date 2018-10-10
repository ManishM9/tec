import { Component, OnInit } from '@angular/core';

import * as io from 'socket.io-client';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memhome',
  templateUrl: './memhome.component.html',
  styleUrls: ['./memhome.component.css']
})
export class MemhomeComponent implements OnInit {
  valid: boolean = false;
  name: string = '';
  messages = [];
  newMessage: string = '';
  socket: SocketIOClient.Socket;

  constructor(private loginService: LoginService, private router: Router) {
    // this.socket = io.connect("https://secure-wave-33024.herokuapp.com");
    this.socket = io.connect();
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.socket.on('message-recieved', (data: any) => {
    //     console.log(data);
    //     this.messages.push(data.message);
    //     console.log(this.messages);
    //   });
    // }, 500);
    this.socket.on('message-recieved', (data: any) => {
      let obj = {
        message: data.message,
        sender: data.sender,
      };
      this.messages.push(obj);
    });
    this.loginService.getName().subscribe(data => {
      this.name = data.name;
      // console.log(this.name);
      if(this.name === undefined || this.name === ""){
        this.valid = false;
        this.router.navigate(['/login']);
      } else {
        this.valid = true;
      }
    });
  }

  submit(e: any) {
    e.preventDefault();
    // alert(this.newMessage);
    if(this.name !== "" && this.name !== undefined){
      this.socket.emit('message-send', { message: this.newMessage, sender: this.name });
      this.newMessage = '';
    } else {
      
    }
  }

}
