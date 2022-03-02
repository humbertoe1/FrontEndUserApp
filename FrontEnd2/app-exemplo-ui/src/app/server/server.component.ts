import { Component, OnInit } from '@angular/core';
import randomInteger from 'random-int';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = randomInteger(50);
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  serverCreation: string = "DO NOT DARE TO PRESS THIS BUTTON";
  serverName: string = 'NOSERVER';
  userName: string = "";
  isThereAnyInput: boolean = false;
  serverCreated: boolean = false;
  buttonActivated: boolean = false;
  howManyTimes: number  = 0;

  getServerStatus(serverId: number){
    if (serverId % 2 == 0){
    this.serverStatus = 'offline';
    }else{
      this.serverStatus = 'online';
    }

    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreation = "HOW DARE YOU? and the server name is: " + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onInputDetected(event: any){
    this.isThereAnyInput = true;
  }
  onButtonClick(){
    this.userName = "";
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getColorBlue(){
    if(this.howManyTimes >= 5){
    return 'rgb(177, 187, 245)';
    }
    else{
      return 'white';
    }
  }
  onDisplayDetailsButtonClick(){
    this.buttonActivated = true;
    this.howManyTimes++;
  }
}
