import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' }, //pathMatch full is required because Angular 'sees' an invisible space between the domain url and the route name.  This forces Angular to ignore that space.
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent }
];

export const router = RouterModule.forRoot(APP_ROUTES);
