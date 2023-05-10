import { Injectable } from '@angular/core';
import { IFraisScolarite } from 'src/app/interfaces/i-frais-scolarite';

@Injectable({
  providedIn: 'root'
})
export class FraisScolariteService {

  constructor() { }

  public getAll():IFraisScolarite[]{
    return [
      {
        id: "11",
        tranche: 1,
        montant:"12 000"
      }
    ]
  }
}
