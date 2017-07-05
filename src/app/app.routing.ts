import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './_templates/login/login.component';
import { ArticlesListComponent } from './_templates/home/articles-list/articles-list.component';
import { ArticleComponent } from './_templates/home/article/article.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/articles', pathMatch: 'full' },
    { path: 'articles', component: ArticlesListComponent, canActivate: [AuthGuard] },   
    { path: 'articles/:id', component: ArticleComponent, canActivate: [AuthGuard] },    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);