import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './auth/logout.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { ErrorComponent } from './errors/error.component';

import { HttpModule } from '@angular/http';

import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';

import { router } from "./app.router";

//Modularized components
import { MessageModule } from "./messages/message.module";


@NgModule({ // This is a typescript Decorator that attaches additional info to a class.
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        router,
        ReactiveFormsModule,
        HttpModule,
        MessageModule
    ],
    providers: [Title, AuthService, ErrorService], // In Angular 2 , you can import services at the component level, or at the entire app level.  A service imported at the app level is known as a Provider.  As a side note, this principle is also known as redux in React.
    bootstrap: [AppComponent]
})
export class AppModule { }
