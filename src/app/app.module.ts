
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}