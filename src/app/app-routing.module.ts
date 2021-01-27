import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthServiceGuard } from './auth/auth-service.guard';
import { LayoutComponent } from './layout/layout.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: "", 
    component: LayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [AuthServiceGuard]
      },
      {path: "login", component: LoginComponent},
      {path: "**", redirectTo:"home"}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
