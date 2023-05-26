import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import { AnneeModel } from 'src/app/models/annee/annee-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AnneeAcademiqueService {
// Connexion to spring project
  readonly API_URL = "http://localhost:8093"

  readonly ENDPOINT_YEARS = "/findAllYears"

  readonly POST_YEAR = "/addYear"

  readonly DELETE_YEAR = "/deleteYear"

  constructor( private httpClient: HttpClient) { }

  //Find All Years in mongo spring database
  getYears(){
      return this.httpClient.get(this.API_URL+this.ENDPOINT_YEARS)
  }
  //Save new Year in the database.
  addYear( annee: AnneeModel ) {
      return this.httpClient.post((this.API_URL+this.POST_YEAR), annee)
  }

  //Delete  Year in the database.
//  deleteYear( id: string ) {
//     return this.httpClient.delete((this.API_URL+this.POST_YEAR+"/{id}"),)
// }

  
}
