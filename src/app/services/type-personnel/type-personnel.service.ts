import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITypePersonnel } from 'src/app/interfaces/itype-personnel';

@Injectable({
  providedIn: 'root'
})
export class TypePersonnelService {

  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8080/"

  public getAll() {
    return this.http.get(this.API_URL + "findAllRole" )
  }

  public  save(data:any){
    return this.http.post(this.API_URL + "addRole",data )
  }
}
