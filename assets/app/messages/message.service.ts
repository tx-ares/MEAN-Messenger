import { Http } from "@angular/http";
import { Message } from "./message.model";
import { Injectable } from "@angular/core";
import 'rxjs/Rx'; //Third party plugin , not a part of Angular
import { Observable } from "rxjs";



@Injectable()
export class MessageService {
    private messages: Message[] = []; //By adding 'private' to this to make it non-accessible from the outside.

    constructor(private http: Http) {}

    addMessage(message: Message) { //This is our main function of the 'MessageService'
        this.messages.push(message)
        const body = JSON.stringify(message)
        return this.http.post('http://localhost:3000/message', body) //This POST request must match the route defined in routes/messages.js.  It does. ;)  Note :  This DOES NOT send the request.  It instead creates an Observable that can be 'subscribed' to .
            .map((response: Response) => response.json())  //This is from rxjs/Rx and allows for transforming of data.
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message) , 1); //We can use the JavaScript method .splice to remove an index from our array.  In this case, to remove a message from the messages array.
    }
}
