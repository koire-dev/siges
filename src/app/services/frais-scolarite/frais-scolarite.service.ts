import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFraisScolarite } from 'src/app/interfaces/i-frais-scolarite';

@Injectable({
  providedIn: 'root'
})
export class FraisScolariteService {

  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8080/"

  public getAll() {
    return this.http.get(this.API_URL + "findAllSlices" )
  }

  public  save(data:any){
    return this.http.post(this.API_URL + "addSlice",data )
  }
}
