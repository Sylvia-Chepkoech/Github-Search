import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GitprofileService } from './gitprofile-service/gitprofile.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoComponent } from './repo/repo.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    NotFoundComponent,
    RepoComponent,
    LandingPageComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
