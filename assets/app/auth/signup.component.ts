import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from './auth.service';

import { User } from './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent {
    myForm : FormGroup; //There exists a FormBuilder tool with Angular... Look into more later..

    constructor(private authService: AuthService) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signUp(user)
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
                Validators.required,
                Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
