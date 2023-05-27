import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnneeAcademiqueService {

  constructor(private http: HttpClient) { }
  readonly API_URL = "http://localhost:8093/"
  public getAllYears() {
    return this.http.get(this.API_URL + "findAllYears" )
  }

  public updateStatus(_id:String, _status:String) {
   // return this.http.get(this.API_URL + "findAllYears" )
   return this.http.put(this.API_URL + "updateStatus/"+_id,_status)
  }

}
