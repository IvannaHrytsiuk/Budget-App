import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MainComponent},
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
