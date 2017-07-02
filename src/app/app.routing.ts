import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ArticlesListComponent } from './home/articles-list/articles-list.component';
import { ArticleComponent } from './home/article/article.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'articles', component: ArticlesListComponent, canActivate: [AuthGuard] },   
    { path: 'articles/:id', component: ArticleComponent, canActivate: [AuthGuard] },    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);