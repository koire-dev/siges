import { Injectable } from '@angular/core';
import { ITypePermission } from 'src/app/interfaces/i-type-permission';

@Injectable({
  providedIn: 'root'
})
export class TypePermissionService {

  constructor() { }

  public getAll():ITypePermission[]{
    return [{
      id:"001",
      label:"Voyage"
    }];
  }
}
