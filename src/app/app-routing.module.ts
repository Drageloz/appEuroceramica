import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {AppComponent} from './app.component';
import { AuthServiceGuard } from './auth/auth-service.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: "", component: AppComponent, canActivate: [AuthServiceGuard]},
  {path: "home", component: AppComponent, canActivate: [AuthServiceGuard]},
  {path: "login", component: LoginComponent},
  {path: "**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
