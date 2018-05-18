import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
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


@NgModule({ // This is a typescript Decorator that attaches additional info to a class.
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
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
        HttpModule
    ],
    providers: [Title, AuthService, ErrorService], // In Angular 2 , you can import services at the component level, or at the entire app level.  A service imported at the app level is known as a Provider.  As a side note, this principle is also known as redux in React.
    bootstrap: [AppComponent]
})
export class AppModule { }
