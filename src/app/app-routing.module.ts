import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitizenshipComponent } from './components/helpfull-info/citizenship/citizenship.component';
import { AboutComponent } from './components/about/about.component';
import { I130Component } from './components/forms/i130/i130.component';
import { I131Component } from './components/forms/i131/i131.component';
import { I485Component } from './components/forms/i485/i485.component';
import { I765Component } from './components/forms/i765/i765.component';
import { N400Component } from './components/forms/n400/n400.component';
import { SsnComponent } from './components/helpfull-info/ssn/ssn.component';
import { DriversLicenceComponent } from './components/helpfull-info/drivers-licence/drivers-licence.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'i130', component: I130Component},
  {path: 'i131', component: I131Component},
  {path: 'i485', component: I485Component},
  {path: 'i765', component: I765Component},
  {path: 'n400', component: N400Component},
  {path: 'ssn', component: SsnComponent},
  {path: 'drivers-licence', component: DriversLicenceComponent},
  {path: 'citizenship', component: CitizenshipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
