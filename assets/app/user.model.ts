export class User {
    constructor(
        public email: string,
        public password: string,
        public firstName?: string, // Since I won't always need the first and last names each time this model is used, I can make these optional by adding a '?' to them.  This will yield null values for those properties.
        public lastName?: string ) { //Using the public modifier, I can access the same data as is created in the message.model.ts file.  Note that the ways that these two files are creating and passing properties yields the same result.

    }
}
