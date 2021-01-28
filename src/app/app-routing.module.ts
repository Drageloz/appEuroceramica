import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthServiceGuard } from './auth/auth-service.guard';
import { LayoutComponent } from './layout/layout.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: "euro", 
    component: LayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [AuthServiceGuard]
      },
      {
        path: "users",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [AuthServiceGuard]
      },
      {path: "**", redirectTo:"home"}
    ]
  },
  {path: "login", component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
