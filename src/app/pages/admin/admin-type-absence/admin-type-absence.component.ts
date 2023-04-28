import { Component, OnInit } from '@angular/core';
import { ITypeAbsence } from 'src/app/interfaces/itype-absence';
import { TypeAbsenceService } from 'src/app/services/type-absence/type-absence.service';

@Component({
  selector: 'app-admin-type-absence',
  templateUrl: './admin-type-absence.component.html',
  styleUrls: ['./admin-type-absence.component.css']
})
export class AdminTypeAbsenceComponent implements OnInit {

  public absences:ITypeAbsence[]=[];
  public  num:number = 1;
  constructor(private typeAbsenceService : TypeAbsenceService){}
  ngOnInit(): void {
    
    this.absences = this.typeAbsenceService.getAll();
  }

}
