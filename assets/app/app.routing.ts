import { Routes } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent }
];
