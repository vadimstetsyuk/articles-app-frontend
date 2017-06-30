import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/index';
import { User } from '../models/user';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {
    user: User;

    constructor(private router: Router,
        private authenticationService: AuthenticationService,
        public snackBar: MdSnackBar) {
        this.user = new User();
    }

    login() {
        this.authenticationService.login(this.user)
            .subscribe(result => {
                if (result === true)
                    this.router.navigate(['/']);
                else {
                    this.user = new User();
                    this.snackBar.open('Incorrect login or password. Please, try again!', 'Ok', {
                        duration: 5000,
                    });
                }
            });
    }
}