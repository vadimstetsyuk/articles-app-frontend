import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ValidatorsModule } from 'ngx-validators';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './_templates/toolbar/toolbar.component';
import { LoginComponent } from './_templates/login/login.component';
import { ArticlesListComponent } from './_templates/home/articles-list/articles-list.component';
import { ArticleComponent } from './_templates/home/article/article.component';
import { CommentListComponent } from './_templates/home/comment-list/comment-list.component';
import { CommentFormComponent } from './_templates/home/comment-form/comment-form.component';
import { PaginationComponent } from './_templates/home/articles-list/pagination/pagination.component';

import { AuthenticationService, ArticleService, CommentService } from './_services/index';
import { AuthGuard } from './_guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    ArticlesListComponent,
    ArticleComponent,
    CommentListComponent,
    CommentFormComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    ValidatorsModule,
    Routing
  ],
  providers: [
    ArticleService,
    CommentService,
    AuthGuard,
    AuthenticationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }