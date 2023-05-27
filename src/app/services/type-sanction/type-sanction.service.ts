import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITypeSanction } from 'src/app/interfaces/i-type-sanction';

@Injectable({
  providedIn: 'root'
})
export class TypeSanctionService {

  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8080/"

  public getAll() {
    return this.http.get(this.API_URL + "findAllTypeSanction" )
  }

  public  save(data:any){
    return this.http.post(this.API_URL + "addTypeSanction",data )
  }
  public delete(id:any){
    return this.http.delete(this.API_URL+"deleteTypeSanction/"+id)
  }
}
