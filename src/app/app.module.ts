
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from "./material/material.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent
  ],
  imports: [MaterialModule, AppRoutingModule, BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}