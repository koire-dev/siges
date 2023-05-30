import { Injectable } from '@angular/core';
import { ITypePersonnel } from 'src/app/interfaces/itype-personnel';

@Injectable({
  providedIn: 'root'
})
export class TypePersonnelService {

  constructor() { }

  public getAll() :ITypePersonnel[]{
    return [{
      id:"001",
      label:"Principale"
    }];
  }
}
