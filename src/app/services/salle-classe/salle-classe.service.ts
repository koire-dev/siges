import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalleClasseService {

  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8080/"

  public getAll() {
    return this.http.get(this.API_URL + "findAllSalle" )
  }

  public  save(data:any){
    return this.http.post(this.API_URL + "addSalle",data )
  }
}
