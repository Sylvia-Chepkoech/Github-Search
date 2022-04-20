import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GitprofileService } from './gitprofile-service/gitprofile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GitprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
