import { Injectable } from '@angular/core';
import { ITypeAbsence } from 'src/app/interfaces/itype-absence';

@Injectable({
  providedIn: 'root'
})
export class TypeAbsenceService {

  constructor() { }
  public getAll(): ITypeAbsence[] {
    return [{
      id: "001",
      label: "Maladie"
    },
    {
      id: "002",
      label: "permision"
    }];
  }
}
