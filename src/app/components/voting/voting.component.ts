import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { VotlistService } from '../../services/votlist.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  voting: any = [];

  constructor(private loginService: LoginService, private votlistService: VotlistService) { }

  ngOnInit() {
    this.votlistService.getVoting().subscribe(data => {
      this.voting = data;
      console.log(this.voting);
    });
  }

}