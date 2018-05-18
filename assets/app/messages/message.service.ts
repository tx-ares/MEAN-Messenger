import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx'; //Third party plugin , not a part of Angular
import { Observable } from "rxjs";

import { Message } from "./message.model";

@Injectable()
export class MessageService {
    private messages: Message[] = []; //By adding 'private' to this to make it non-accessible from the outside.
    messageInEditMode = new EventEmitter<Message>();

    constructor(private http: Http) {}

    addMessage(message: Message ) { //This is our main function of the 'MessageService'
        const body = JSON.stringify(message)
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/message' + token, body, {headers: headers}) //This POST request must match the route defined in routes/messages.js.  It does. ;)  Note :  This DOES NOT send the request.  It instead creates an Observable that can be 'subscribed' to .
            .map((response: Response) => {
                const result = response.json();  //This is from rxjs/Rx and allows for transforming of data.
                const message = new Message(
                        result.obj.content,
                        result.obj.user.firstName,
                        result.obj._id,
                        result.obj.user._id);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json())); //Error handler
    }

    getMessages() {
        return this.http.get('http://localhost:3000/message') // Now fetching data from database.
            .map((response: Response) => { // I expect an array of messages, so I will use the .map() method it to iterate over every message and....
                const messages = response.json().obj; // parsing into json.
                let transformedMessages: Message[] = [];
                for (let message of messages) { //es6 JS syntax for referring to every index of the 'messages' array as a 'message'
                    transformedMessages.push( new Message(
                        message.content,
                        message.user.firstName,
                        message._id,
                        message.user._id)
                    ); // Note the '_' in message._id.  This is how it is defined in mongoDb
                }
                this.messages = transformedMessages;
                return transformedMessages; //This .map() method at the end of the day is going to return an 'observable'
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editMessage(message: Message) {
        this.messageInEditMode.emit(message);
    }

    updateMessage(message: Message) { // Method that actually handles the updating on the front end
        this.messages.push(message)
        const body = JSON.stringify(message)
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers}) // This is very similar to the addMessage target route, except that it is also expecting a messageId as defined in the patch route.
            .map((response: Response) => response.json())  //This is from rxjs/Rx and allows for transforming of data.
            .catch((error: Response) => Observable.throw(error.json())); //Error handler

    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message) , 1); //We can use the JavaScript method .splice to remove an index from our array.  In this case, to remove a message from the messages array.
        return this.http.delete('http://localhost:3000/message/' + message.messageId) // This is very similar to the addMessage target route, except that it is also expecting a messageId as defined in the delete route.
            .map((response: Response) => response.json())  //This is from rxjs/Rx and allows for transforming of data.
            .catch((error: Response) => Observable.throw(error.json())); //Error handler
    }
}
