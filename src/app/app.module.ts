import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PagesComponent } from "./pages/pages.component";
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'contact-us', component: ContactUsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    ContactUsComponent,
    PagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
