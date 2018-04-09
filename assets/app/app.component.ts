import { Component } from '@angular/core';

@Component({ //This is creating a component and selecting the template it will use in the templateUrl key.
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
  content = 'Mic-a-rino Check-a-rino';
}
