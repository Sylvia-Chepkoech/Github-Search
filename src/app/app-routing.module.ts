import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingPageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'repo', component: RepoComponent},
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfileComponent, RepoComponent, LandingPageComponent, NotFoundComponent]
