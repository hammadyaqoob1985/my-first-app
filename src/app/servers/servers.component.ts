import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
serverName ='Testserver';
allowNewserver = false;
serverCreationStatus = 'No server was created!';
serverCreated = false;
servers = ['TestServer', 'TestServer 2'];
  constructor() { 
    setTimeout(() => {
      this.allowNewserver = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus= 'Server was created and server name is' + this.serverName;
   this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event:any) {
    this.serverName= event.target.value;
  }
}
