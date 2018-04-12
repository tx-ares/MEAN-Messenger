import { Component } from "@angular/core";

@Component({
    selector: "app-message-input",
    templateUrl: "./message-input.component.html"
})

export class MessageInputComponent {
    onSave(value: string) { //We can pass in our 'input value' as an argument in our onSave function.  Here we want to capture the input.value and do something with it later.
        console.log(value)
    };
}
