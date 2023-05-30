import { Injectable } from '@angular/core';
import { ISalleClasse } from 'src/app/interfaces/i-salle-classe';

@Injectable({
  providedIn: 'root'
})
export class SalleClasseService {

  constructor() { }

  public getAll():ISalleClasse[]{
    return[
      {
        id:"11",
        label: "6 A",
        serie :{
          id : "11",
          label :""
        }
      }
    ]
  }
}
