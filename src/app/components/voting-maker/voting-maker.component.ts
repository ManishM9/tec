import { Component, OnInit } from '@angular/core';

import { Voting } from '../../models/Voting';
import { VotingOption } from '../../models/VotingOption';

import { VotlistService } from '../../services/votlist.service';

@Component({
  selector: 'app-voting-maker',
  templateUrl: './voting-maker.component.html',
  styleUrls: ['./voting-maker.component.css']
})
export class VotingMakerComponent implements OnInit {
  votingoptions: VotingOption[] = [{
    name : "",
    description : "",
  },];
  voting: Voting = {
    title: "",
    description: "",
    createdby: "",
    createdbyname: "",
    options: this.votingoptions,
    clearance: "",
  };

  addoption() {
    this.votingoptions.push({
      name: "",
      description: "",
    });
  }

  deloption() {
    this.votingoptions.pop();
  }

  constructor(private votlistService: VotlistService) { }

  ngOnInit() {
  }

  submit() {
    this.votlistService.postVoting(this.voting).subscribe(data => {
      if(data){
        alert("Voting Successfully Added!!!!");
        this.votingoptions = [{
          name : "",
          description : "",
        },];
        this.voting = {
          title: "",
          description: "",
          createdby: "",
          createdbyname: "",
          options: this.votingoptions,
          clearance: "",
        };
      } else {
        alert("Unsuccessful\n\n\nLike me asking a girl out  ~Dev");
      }
    });
  }

}