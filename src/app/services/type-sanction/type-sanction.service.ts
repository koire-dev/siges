import { Injectable } from '@angular/core';
import { ITypeSanction } from 'src/app/interfaces/i-type-sanction';

@Injectable({
  providedIn: 'root'
})
export class TypeSanctionService {

  constructor() { }
  public getAll(): ITypeSanction[] {
    return [{
      id: "001",
      label: "Exclusion"
    }];
  }
}
