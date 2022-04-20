import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GitprofileService } from './gitprofile-service/gitprofile.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { FormValidateDirective } from './form-validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    RepoComponent,
    LandingPageComponent,
    ProfileComponent,
    FormValidateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GitprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
