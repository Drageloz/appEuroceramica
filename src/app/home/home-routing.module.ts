import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { UsersComponent } from './components/users/users.component';
import { ProcessComponent } from './components/process/process.component';

const routes: Routes = [ 
    {
        path: "",
        component: HomeComponent
    },
    {
      path: "users",
      component: UsersComponent
    },
    {
      path: "process",
      component: ProcessComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }