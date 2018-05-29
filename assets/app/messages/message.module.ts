import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

//Child Components
import { MessageComponent } from './message.component';
import { MessagesComponent } from './messages.component';
import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';

//Providers
import { MessageService } from './message.service';

@NgModule({
    declarations: [
        MessagesComponent,
        MessageListComponent,
        MessageComponent,
        MessageInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})

export class MessageModule {

}
