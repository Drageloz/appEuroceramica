import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ProcessComponent } from './components/process/process.component';
import { CountersComponent } from './components/counters/counters.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    ProcessComponent,
    CountersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
