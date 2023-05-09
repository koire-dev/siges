import { Injectable } from '@angular/core';
import { ICycle } from 'src/app/interfaces/i-cycle';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  constructor() { }

  public getAll():ICycle[]{
    return [
      {
        id:"11",
        label:"1er"
      }
    ]
  }
}
