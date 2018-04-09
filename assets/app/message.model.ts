export class Message { // Note that this is a TypeScript object.  Syntax is slightly different... ;'s instead of commas seperating property / value pairs.
    content: string;
    username: string;
    messageId: string;
    userId: string;

    constructor(content: string, username: string, messageId: string, userId: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}
