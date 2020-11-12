import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserMod } from '../../modules/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrService {
  url:string;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3800/api/auth/signup';
  }
  addJSONUser(user:UserMod):Observable<Array<UserMod>>{
    return this.http.post<Array<UserMod>>(this.url, user)
  }
}
