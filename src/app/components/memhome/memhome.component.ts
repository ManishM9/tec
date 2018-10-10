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
  onlineUsers = [];
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
    this.socket.on('message-recieved-bulk', data => {
      this.messages = data;
    });
    this.socket.on('message-recieved', (data: any) => {
      let obj = {
        message: data.message,
        sender: data.sender,
        time: data.time,
      };
      this.messages.push(obj);
    });
    // this.socket.on('register-urselves', data => {
    //   if(this.name !== undefined && this.name !== ""){
    //     this.socket.emit('register', this.name);
    //   }
    // });
    setInterval(() => {
      if(this.name !== undefined && this.name !== ""){
        this.socket.emit('register', this.name);
      }
      this.socket.emit('get-online-users', { doIt: true });
    }, 500);
    // this.socket.emit('get-online-users', { doIt: true });
    this.socket.on('recieve-online-users', data =>{
      this.onlineUsers = data;
      console.log(this.onlineUsers);
    });
    this.loginService.getName().subscribe(data => {
      this.name = data.name;
      // console.log(this.name);
      if(this.name === undefined || this.name === ""){
        this.valid = false;
        this.router.navigate(['/login']);
      } else {
        this.valid = true;
        this.socket.emit('register', this.name);
      }
    });
  }

  submit(e: any) {
    e.preventDefault();
    // alert(this.newMessage);
    if(this.name !== "" && this.name !== undefined){
      this.socket.emit('message-send', { message: this.newMessage, sender: this.name, time: Date.now() });
      this.newMessage = '';
    } else {
      
    }
  }

}
