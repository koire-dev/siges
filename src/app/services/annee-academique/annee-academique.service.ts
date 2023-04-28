import { Injectable } from '@angular/core';
import { IAnneeAcademique } from 'src/app/interfaces/i-annee-academique';

@Injectable({
  providedIn: 'root'
})
export class AnneeAcademiqueService {

  constructor() { }

  public getAll():IAnneeAcademique[]{
    return [
      {
        id:"11",
        debut: 2022,
        fin: 2023,
        annee :"2022-2023",
        statut :"inactive"
      },
      {
        id:"12",
        debut: 2023,
        fin: 2024,
        annee :"2023-2024",
        statut:"active"
      }
    ]
  }
}
