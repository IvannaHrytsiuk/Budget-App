import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incomes } from '../../modules/addincomes.model';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {
  url:string;

  constructor( private http: HttpClient) {
    this.url = 'http://localhost:3800/incomes';
   }

  getJSONUserIncomes(user_id):Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.url}/${user_id}`);
  }

  addJSONUserIncomes(incomes:Incomes):Observable<Array<Incomes>>{
    return this.http.post<Array<Incomes>>(this.url, incomes);
  }
}
