import { Component } from '@angular/core';

@Component({ //This is creating a component and selecting the template it will use in the templateUrl key.
    selector: 'my-app',
    templateUrl: './app.component.html',
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
export class AppComponent {
    message = {
        content: "Yo yo yo it's a message",
        author: "Adan"
    }
}
