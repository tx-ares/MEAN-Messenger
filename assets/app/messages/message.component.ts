import { Component, Input } from "@angular/core";

import { Message } from "./message.model";

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
      `] // Angular also allows us to specically target elements within a component for styling.  We can pass it in as normal CSS here.
})
export class MessageComponent {
    @Input('myMessageAliasName') message: Message; //By using 'property binding' we can pass in the message property.  Also, by adding '@Input()' to the property name, it can be made assignable from an outside source. i.e. An input field.
}
