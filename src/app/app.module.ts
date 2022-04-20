import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GitprofileService } from './gitprofile-service/gitprofile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GitprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
