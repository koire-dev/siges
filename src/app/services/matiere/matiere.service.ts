import { Injectable } from '@angular/core';
import { IMatiere } from 'src/app/interfaces/i-matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor() { }

  public getAll():IMatiere[]{
    return [
      {
        id:"11",
        label :"Mathematique"
      }
    ]
  }
}
