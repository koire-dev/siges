import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISerie } from 'src/app/interfaces/i-serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8093/"

  public getAll() {
    return this.http.get(this.API_URL + "findAllSeries" )
  }

  public  save(data:any){
    return this.http.post(this.API_URL + "addSerie",data )
  }
}
