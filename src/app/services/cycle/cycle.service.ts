import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICycle } from 'src/app/interfaces/i-cycle';

@Injectable({
  providedIn: 'root'
})
export class CycleService {
  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8080/"
  public getAll() {
    return this.http.get(this.API_URL + "findAllCycle" )
  }

  public getById(id:any) {
    return this.http.get(this.API_URL + "findCycle/"+id )
  }

  
}
