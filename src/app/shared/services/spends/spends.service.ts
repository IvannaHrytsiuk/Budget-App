import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpendsService {
  url:string;

  constructor( private http: HttpClient) {
    this.url = 'http://localhost:3800/spends';
   }

  getJSONUserSpends(user_id):Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.url}/${user_id}`);
  }

  addJSONUserSpends(spends):Observable<Array<any>>{
    return this.http.post<Array<any>>(this.url, spends);
  }
}
