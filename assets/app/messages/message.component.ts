import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Message } from "./message.model";

import { MessageService } from "./message.service";

@Component({
    selector: 'app-message', // Pass in a CSS Selector ex)  'something' --> <something>
    templateUrl: './message.component.html',
    styles: [`
        .author {
          display: inline-block;
          font-style: italic;
          font-size: 12px;
          width: 80%;
        }
        .config {
          display: inline-block;
          text-align: right;
          font-size: 12px;
          width: 19%;
        }
      `] // Angular also allows us to specifically target elements within a component for styling.  We can pass it in as normal CSS here.
})
export class MessageComponent {
    @Input('myMessageAliasName') message: Message; //By using 'property binding' we can pass in the message property.  Also, by adding '@Input()' to the property name, it can be made assignable from an outside source. i.e. An input field.

    @Output() editClicked = new EventEmitter<string>(); //@Output can bind a output function once it is called, in addition 'emit' the event AND its type.

    constructor(private messageService: MessageService) { } //Remember in order to utilize the MessageService we created, we need to create an instance of it in this component.

    onEdit() {
        this.editClicked.emit('A new string value');
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}
