import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/loginUser.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile/profile-detail.component';
import { ProfileService } from './profile/profile.service';

import { DataService } from './data-service/data.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClient } from './oauth/httpClient';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //MaterialModule.forRoot(),
    AppRoutingModule,
    MaterializeModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ProfileDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProfileService,HttpClient,DataService],
})
export class AppModule { }