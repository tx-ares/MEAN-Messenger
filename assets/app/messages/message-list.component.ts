import { Component } from "@angular/core";

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
        </div>`
    // We can use the 'structural directive' *ngFor to create a loop that will iterate through all of our message array.
    // This is the entry point for our 'message' component as seen as the 'selector' in message.component.ts   It also listens for an event called 'editClicked' which I defined in message.component.ts as a @Output() event.
})
export class MessageListComponent {
    messages: Message[] = [
        new Message ('A Constructor made this message!', 'Adan'),
        new Message ('A 2nd message in our message array! Look at dat!', 'Adan'),
        new Message ('A 3rd message in our message array! Look at dat!', 'Adan')
    ];
}
