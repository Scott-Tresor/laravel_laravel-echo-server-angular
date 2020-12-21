import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
    echo: any = null;
    constructor() {

        let e = new Echo({
            broadcaster: 'socket.io',
            host: 'http://localhost:6001'
        });

        e.channel('test')
            .listen('PostCreatedEvent', e => {
                console.log(e);
            });
    }


}
