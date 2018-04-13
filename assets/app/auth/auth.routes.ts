import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";


export const AUTH_ROUTES: Routes = [
    { path: 'signup', component: SignupComponent , pathMatch: 'full'},
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent } //Notice these route paths do not have a '/' in front of them.  That is because if they did, they would continually reference the base domain URL instead of the parent route.  These will be child routes for /auth
];
