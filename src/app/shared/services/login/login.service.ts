import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLog } from '../../modules/logUs.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string;
  urlUser:string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3800/api/auth/signin';
    this.urlUser ='http://localhost:3800/api/test/user';
  }
  checkJSONUser(user:UserLog):Observable<Array<UserLog>>{
    return this.http.post<Array<UserLog>>(this.url, user);
  }
  checkJSONBoardUser(key:string):Observable<any>{
    return this.http.get(this.urlUser, {headers: { "x-access-token": key}});
  }
}
