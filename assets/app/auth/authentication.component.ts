import { Component } from "@angular/core";

@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li><a >Sign Up</a></li>
                    <li><a >Sign In</a></li>
                    <li><a >Log Out</a></li>
                </ul>
            </nav>
        </header>
    `
})
export class AuthenticationComponent { }
