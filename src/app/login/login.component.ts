import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../service/api.service";
import { Router } from "@angular/router";
import { User } from "../interface/user"


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit{
  email!:string;
  password!:string;
  responsePassWord!:string;
  sessionActive!:string;


  constructor(public apiService: ApiService, public router: Router) {
  }
  
  ngOnInit(): void {
    if(localStorage.getItem("sesion") == "activo"){
      this.router.navigate(['/euro/home']);
    }
  }

  @ViewChild('loginIncorrect') loginIncorrect!: ElementRef;
  @ViewChild('username') username!: ElementRef;
  @ViewChild('passw') passw!: ElementRef;

  async login(){
    try{
    await this.apiService.login(this.email).then(result =>
      this.responsePassWord = result.usPass
      );

      console.log(localStorage.getItem("sesion"));

      if(this.password == this.responsePassWord){
        this.sessionActive = "activo";
        localStorage.setItem("sesion", this.sessionActive);
        this.router.navigate(['/euro/home']);
      }
      else{
        this.username.nativeElement.value = "";
        this.passw.nativeElement.value = "";
        this.loginIncorrect.nativeElement.style.display = "block";
      }
    }
    catch(error){
      this.username.nativeElement.value = "";
      this.passw.nativeElement.value = "";
      this.loginIncorrect.nativeElement.style.display = "block";

    }
  }
}


