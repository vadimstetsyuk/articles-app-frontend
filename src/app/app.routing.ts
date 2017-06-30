import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ArticlesListComponent } from './home/articles-list/articles-list.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'articles', component: ArticlesListComponent, canActivate: [AuthGuard] },    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);