import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerticalNavbarComponent } from './components/vertical-navbar/vertical-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CitizenshipComponent } from './components/citizenship/citizenship.component';
import { AboutComponent } from './components/about/about.component';
import { I130Component } from './components/forms/i130/i130.component';
import { I131Component } from './components/forms/i131/i131.component';
import { I485Component } from './components/forms/i485/i485.component';
import { I765Component } from './components/forms/i765/i765.component';
import { N400Component } from './components/forms/n400/n400.component';
import { SsnComponent } from './components/helpfull-info/ssn/ssn.component';
import { DriversLicenceComponent } from './components/helpfull-info/drivers-licence/drivers-licence.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VerticalNavbarComponent,
    FooterComponent,
    HomeComponent,
    CitizenshipComponent,
    AboutComponent,
    I130Component,
    I131Component,
    I485Component,
    I765Component,
    N400Component,
    SsnComponent,
    DriversLicenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
