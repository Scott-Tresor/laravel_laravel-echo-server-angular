import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./services/websocket.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'scott tresor';

  data: string

  constructor(private  socketService: WebsocketService) {
  }


  ngOnInit() {
  }


}
