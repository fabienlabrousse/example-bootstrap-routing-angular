import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private userService: UserService) {
        this.registerForm = new FormGroup({
            firstname: new FormControl('', [Validators.required]),
            lastname: new FormControl('', [Validators.required]),
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            address: new FormControl('', [Validators.minLength(10), Validators.maxLength(200)])
        });
    }

    ngOnInit(): void {
    }

    registerUser(): void {
        this.userService.register(this.registerForm.value).subscribe(
            (returnedValue) => {
                return;
            },
            (error) => {
                return;
            }
        );
    }
}
