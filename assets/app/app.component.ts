import { Component } from '@angular/core';

import { Message } from "./messages/message.model";

@Component({ //This is creating a component and selecting the template it will use in the templateUrl key.
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [] // Angular also allows us to specically target elements within a component for styling.  We can pass it in as normal CSS here.
})
export class AppComponent {
    message = Message = new Message ('A Constructor made this message!', 'Adan';)
}
