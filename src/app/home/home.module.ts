import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ProcessComponent } from './components/process/process.component';
import { CountersComponent } from './components/counters/counters.component';
import { CountersExampleComponent } from './components/counters-example/counters-example.component';



@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    ProcessComponent,
    CountersComponent,
    CountersExampleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
