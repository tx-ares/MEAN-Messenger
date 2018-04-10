import { Component } from "@angular/core";

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

}
