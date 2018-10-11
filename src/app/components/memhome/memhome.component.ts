import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  messagelenold: number = -1;
  messagelennew: number = 0;
  onlineUsers = [];
  valid: boolean = false;
  name: string = '';
  messages = [];
  newMessage: string = '';
  socket: SocketIOClient.Socket;

  perschatflag: boolean = false;
  persname: string = "";
  persmessages = [];
  perschatnewMessage: string = "";

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
      this.messagelenold = this.messagelennew;
      this.messagelennew = this.messages.length;
      if(this.messagelennew > this.messagelenold){
        // console.log(this.messagelenold);
        // console.log(this.messagelennew);
        // try {
        //   this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        // } catch(err) { }
        setTimeout(() => {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }, 1);
        // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        // this.myScrollContainer.nativeElement.scrollToBottom();
      }
    });
    // setInterval(() => {
    //   this.socket.on('message-recieved-bulk', data => {
    //     this.messages = data;
    //   });
    // }, 500);
    // this.socket.on('message-recieved', (data: any) => {
    //   let obj = {
    //     message: data.message,
    //     sender: data.sender,
    //     time: data.time,
    //   };
    //   this.messages.push(obj);
    // });
    // this.socket.on('register-urselves', data => {
    //   if(this.name !== undefined && this.name !== ""){
    //     this.socket.emit('register', this.name);
    //   }
    // });
    setInterval(() => {
      if(this.name !== undefined && this.name !== ""){
        this.socket.emit('register', this.name);
      }
    }, 1000);
    setInterval(() => {
      // if(this.name !== undefined && this.name !== ""){
      //   this.socket.emit('register', this.name);
      // }
      this.socket.emit('get-online-users', { doIt: true });
    }, 500);
    // this.socket.emit('get-online-users', { doIt: true });
    this.socket.on('recieve-online-users', data =>{
      this.onlineUsers = data;
      this.onlineUsers.forEach((element, index) => {
        if(element.name === this.name){
          this.onlineUsers.splice(index, 1);
        }
      });
      // console.log(this.onlineUsers);
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



    setInterval(() => {
      if(this.perschatflag){
        this.socket.emit('get-personalchat', { recipient: this.persname, sender: this.name });
      }
    }, 1000);

    this.socket.on('recieve-personalchat', data => {
      if(this.perschatflag){
        this.persmessages = data;
        console.log(this.persmessages);
      }
    });

  }

  submit(e: any) {
    e.preventDefault();
    // alert(this.newMessage);
    if(this.name !== "" && this.name !== undefined && this.newMessage !== "" && this.newMessage !== undefined){
      this.socket.emit('message-send', { message: this.newMessage, sender: this.name, time: Date.now() });
      this.newMessage = '';
    } else {
      
    }
  }




  perschat(name: string) {
    // alert(name);
    this.perschatflag = true;
    this.persname = name;
  }

  perssubmit(e: any) {
    e.preventDefault();
    // alert(`Sender: ${this.name}, message: ${this.perschatnewMessage}, recipient: ${this.persname}`);
    var persmessage_tosend = {
      sender: this.name,
      message: this.perschatnewMessage,
      recipient: this.persname,
      time: Date.now(),
    };
    this.socket.emit('post-personalchat', persmessage_tosend);
    this.perschatnewMessage = "";
  }

}
