import { Component } from "@angular/core";
import { UsersService } from "../service/users.service";
import { Router } from "@angular/router";
import { User } from "../interface/user"


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent {
  email!:string;
  password!:string;
  responsePassWord!:string;
  sessionActive!:string;


  constructor(public userService: UsersService, public router: Router) {}

  async login(){
    await this.userService.login(this.email).then(result =>
      this.responsePassWord = result.usPass
      );

      console.log(localStorage.getItem("sesion"));

      if(this.password == this.responsePassWord){
        this.sessionActive = "activo";
        localStorage.setItem("sesion", this.sessionActive);
      }
  }

  async logout(){
        this.sessionActive = "inactivo";
        localStorage.setItem("sesion", this.sessionActive);
      }
}


