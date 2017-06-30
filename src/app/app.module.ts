import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ValidatorsModule } from 'ngx-validators'
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ArticlesListComponent } from './home/articles-list/articles-list.component';

import { UserService, AuthenticationService, ArticleService } from './services/index';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    HomeComponent,
    ArticlesListComponent
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
    UserService,
    ArticleService,
    AuthGuard,
    AuthenticationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }