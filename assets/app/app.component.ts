import { Component } from '@angular/core';

@Component({ //This is creating a component and selecting the template it will use in the templateUrl key.
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [] // Angular also allows us to specically target elements within a component for styling.  We can pass it in as normal CSS here.
})
export class AppComponent {

}
