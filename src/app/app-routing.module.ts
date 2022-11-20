import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitizenshipComponent } from './components/citizenship/citizenship.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'citizenship', component: CitizenshipComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
