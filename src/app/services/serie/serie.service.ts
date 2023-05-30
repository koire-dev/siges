import { Injectable } from '@angular/core';
import { ISerie } from 'src/app/interfaces/i-serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor() { }
  public getAll():ISerie[]{
    return[
      {
        id:"11",
        label :"C"
      }
    ]
  }
}
