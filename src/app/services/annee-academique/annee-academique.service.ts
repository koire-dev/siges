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

  readonly FIND_ALLYEARS = "/findAllYears"

  readonly POST_YEAR = "/addYear"

  readonly FIND_ONEYEAR = "/findOneYear"

  readonly UPDATE_YEAR = "/updateYear"

  readonly DELETE_YEAR = "/deleteYear"

  constructor( private httpClient: HttpClient) { }

  //Find All Years in mongo spring database
  getYears(){
      return this.httpClient.get(this.API_URL+this.FIND_ALLYEARS)
  }
  
  //Save new Year in the database.
  addYear( annee: AnneeModel ) {
      return this.httpClient.post((this.API_URL+this.POST_YEAR), annee)
  }

   //Get Year By Id in the database.
   getYearById( id: string ):Observable <AnneeModel>{
     return this.httpClient.get<AnneeModel>( `${this.API_URL+this.FIND_ONEYEAR}/${id}` )
  }

   //Update Year By Id in the database.
   updateYear( id: string, annee: AnneeModel ) : Observable <Object>{
       return this.httpClient.put<AnneeModel>(`${this.API_URL+this.UPDATE_YEAR}/${id}`,  annee)
  }

    //Delete  Year in the database.
  deleteYear( id: string ):Observable <AnneeModel> {
      return this.httpClient.delete<AnneeModel>( `${this.API_URL+this.DELETE_YEAR}/${id}` )
  }

  
}
