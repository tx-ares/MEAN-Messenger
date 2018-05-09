import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from './auth.service';

import { User } from "./user.model";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm : FormGroup; //There exists a FormBuilder tool with Angular... Look into more later..

    constructor(private authService: AuthService) {} //Remember that components must create instances of services from within the component like this so that it has access to it.

    onSubmit() {
        // console.log(this.myForm);
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signIn(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            )
        this.myForm.reset();
    }

    ngOnInit() { //This is how Angular can programatically create a form.  Complete with validation!
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
