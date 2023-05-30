import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import { FraisScolariteModel } from 'src/app/models/frais-scolarite/frais-scolarite-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraisScolariteService {
  
// Connexion to spring project
readonly API_URL = "http://localhost:8093"

readonly FIND_ALLPAYMENTS= "/findAllPayments"

readonly POST_PAYMENT = "/addPayment"

readonly FIND_ONEPAYMENT = "/findOnePayment"

readonly UPDATE_PAYMENT = "/updatePayment"

// ===============================

readonly FIND_ALLTRANCHES= "/findAllSlices"



constructor( private httpClient: HttpClient) { }
  //Find All PAYMENTs in mongo spring database
  getPayment(){
    return this.httpClient.get(this.API_URL+this.FIND_ALLPAYMENTS)
  }

  getTranches(){
    return this.httpClient.get(this.API_URL+this.FIND_ALLTRANCHES)
  }

//Save new PAYMENT in the database.
addPayment( paiement: FraisScolariteModel ) {
    return this.httpClient.post((this.API_URL+this.POST_PAYMENT), paiement)
}

 //Get PAYMENT By Id in the database.
 getPaymentById( id: string ):Observable <FraisScolariteModel>{
   return this.httpClient.get<FraisScolariteModel>( `${this.API_URL+this.FIND_ONEPAYMENT}/${id}` )
}

 //Update PAYMENT By Id in the database.
 updatePayment( id: string, paiement: FraisScolariteModel ) : Observable <Object>{
     return this.httpClient.put<FraisScolariteModel>(`${this.API_URL+this.UPDATE_PAYMENT}/${id}`,  paiement)
}



}
