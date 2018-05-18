import { Component } from "@angular/core";

import { Error } from "./error.model";

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
})

export class ErrorComponent {
    error: Error;
    displayed = 'none';
}
