import { Message } from "./message.model";

export class MessageService {
    private messages: Message[] = []; //By adding 'private' to this to make it non-accessible from the outside.

    addMessage(message: Message) { //This is our main function of the 'MessageService'
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message) , 1); //We can use the JavaScript method .splice to remove an index from our array.  In this case, to remove a message from the messages array.
    }
}
