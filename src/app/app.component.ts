import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./services/websocket.service";
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'scott tresor';

  constructor(private  socketService: WebsocketService) {
  }

  myWebSocket: WebSocketSubject<any> = webSocket('ws://localhost:6001');

  ngOnInit() {
    this.myWebSocket.subscribe(
        msg => console.log('message received: ' + msg),
        err => console.log(err),
        () => console.log('complete')
    );
  }

}
