import { Component, OnInit } from "@angular/core";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component ({ //This is a decorator.  A Component decorator.  And it's not for decoration.  Like, it doesn't make my code any prettier.  I mean, it could.... with the right Atom plugin... but.. I don't have it.. so it's ugly.  It's an ugly decorator.
    selector: "app-message-list",
    template:
        `<div class="col-md-8 col-md-offset-2">
            <app-message
                [myMessageAliasName]="message"
                (editClicked)="message.content = $event"
                *ngFor="let message of messages">
            </app-message>
        </div>`,
    // We can use the 'structural directive' *ngFor to create a loop that will iterate through all of our message array.
    // This is the entry point for our 'message' component as seen as the 'selector' in message.component.ts   It also listens for an event called 'editClicked' which I defined in message.component.ts as a @Output() event.
    //providers: [MessageService]
})
export class MessageListComponent implements OnInit { //'implements OnInit' is a ng Life Cycle method which can contain code that will run when this component is initialized. Below, we can define that set of instructions on init in the 'ngOnInit()' function.
    messages: Message[] = [];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}

//Arrays and Objects in JavaScript are 'reference types'
