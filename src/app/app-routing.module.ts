import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitizenshipComponent } from './components/citizenship/citizenship.component';

const routes: Routes = [
  {path: 'immblog', component: HomeComponent},
  {path: 'immblog/citizenship', component: CitizenshipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
