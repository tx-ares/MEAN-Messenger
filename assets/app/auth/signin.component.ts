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

    constructor(private authService: AuthService, private router: Router) {} //Remember that components must create instances of services from within the component like this so that it has access to it.

    onSubmit() {
        // console.log(this.myForm);
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signIn(user)
            .subscribe(
                data => { // 2 ways to store the token:  1) Browser: Local Storage & Session Storage, Accessable by JavaScript, but vulnerable to cross-scripting attacks.  and 2) Cookies.  Are not accessible by JavaScript, more complicated to submit , and also are vulnerable to other types of attacks.
                    localStorage.setItem('token', data.token); // I will opt for localStorage.  ( Option 1 ) This is a JavaScript special object. Not angular 2.
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.log(error)
            )
        this.myForm.reset();
    }

    ngOnInit() { //This is how Angular can programatically create a form.  Complete with validation!
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
