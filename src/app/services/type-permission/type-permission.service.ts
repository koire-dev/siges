import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITypePermission } from 'src/app/interfaces/i-type-permission';

@Injectable({
  providedIn: 'root'
})
export class TypePermissionService {

  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8080/"

  public getAll() {
    return this.http.get(this.API_URL + "findAllTypePermission" )
  }

  public  save(data:any){
    return this.http.post(this.API_URL + "addTypePermission",data )
  }
}
