import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";
import { User } from "../interface/user"
import { Counter } from "../interface/counter";
import { CountersExample } from "../interface/counterExample";
import { Value } from "../interface/value";


@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiUrl:string = "https://apieuro-v1.herokuapp.com/apiEuroceramica/api";
  private apiNode:string = "https://jolly-skunk-59.loca.lt";
  constructor(private http: HttpClient, private cookies: CookieService) {}
  
  async login(name:string): Promise<User>{
    return await this.http.get<User>(this.apiUrl + "/Users/" + name).toPromise();
  }

  async users(): Promise<User[]>{
    return await this.http.get<User[]>(this.apiUrl + "/Users/" + "all").toPromise();
  }

  async counters(): Promise<Counter[]>{
    return await this.http.get<Counter[]>(this.apiUrl + "/Counters/" + "all").toPromise();
  }

  async countersExample(): Promise<Array<CountersExample>>{
    return await this.http.get<Array<CountersExample>>(this.apiUrl + "/CountersExample/" + "all").toPromise();
  }

  async incrementCountersExample(): Promise<Array<Value>>{
    return await this.http.get<Array<Value>>(this.apiNode + "/increment?value=1").toPromise();
  }

  async decrementCountersExample(): Promise<Array<Value>>{
    return await this.http.get<Array<Value>>(this.apiNode + "/reset?value=2").toPromise();
  }
  
}
