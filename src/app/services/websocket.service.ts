import { Injectable } from '@angular/core';
import Echo from "laravel-echo";
import * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
    echo: any = null;
    constructor() {
        // this.echo = new Echo({
        //     broadcaster: 'socket.io',
        //     host: 'localhost:6001',
        // });
        //
        // this.echo.channel('test')
        //     .listen('PostCreatedEvent', (data) => {
        //         console.log(data);
        //     });
    }

}
