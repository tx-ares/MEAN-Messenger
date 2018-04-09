import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";

@NgModule({ // This is a typescript Decorator that attaches addt. info to a class.
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
