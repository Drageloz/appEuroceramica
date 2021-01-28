import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [ 
    {
        path: "",
        component: HomeComponent
    },
    {
      path: "users",
      component: UsersComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }