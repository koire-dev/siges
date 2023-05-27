import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMatiere } from 'src/app/interfaces/i-matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8080/"

  public getAll() {
    return this.http.get(this.API_URL + "findAllMatiere" )
  }

  public  save(data:any){
    return this.http.post(this.API_URL + "addMatiere",data )
  }
}
