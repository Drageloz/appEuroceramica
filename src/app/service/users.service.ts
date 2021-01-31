import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";
import { User } from "../interface/user"


@Injectable({
  providedIn: "root"
})
export class UsersService {
  private apiUrl:string = "/apiEuroceramica/api";
  constructor(private http: HttpClient, private cookies: CookieService) {}

  async login(name:string): Promise<User>{
    return await this.http.get<User>(this.apiUrl + "/Users/" + name).toPromise();
  }

  async users(): Promise<User[]>{
    return await this.http.get<User[]>(this.apiUrl + "/Users/" + "all").toPromise();
  }
  
}
