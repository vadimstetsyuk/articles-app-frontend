import { Component, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/index';
import { AuthGuard } from '../guards/auth.guard';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['toolbar.component.scss']
})

export class ToolbarComponent implements AfterContentChecked {
    isLogged: boolean;

    constructor(private authenticationService: AuthenticationService,
                private authGuard: AuthGuard,
                private router: Router) {
                    this.isLogged = false;
                }

    ngAfterContentChecked() {
        this.router.url == '/login' ? this.isLogged = false : this.isLogged = true;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}