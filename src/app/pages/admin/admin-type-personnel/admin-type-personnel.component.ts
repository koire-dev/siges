import { Component, OnInit } from '@angular/core';
import { ITypePersonnel } from 'src/app/interfaces/itype-personnel';
import { TypePersonnelService } from 'src/app/services/type-personnel/type-personnel.service';

@Component({
  selector: 'app-admin-type-personnel',
  templateUrl: './admin-type-personnel.component.html',
  styleUrls: ['./admin-type-personnel.component.css']
})
export class AdminTypePersonnelComponent implements OnInit {

  public personnels:any
  constructor(private typePersonnelService : TypePersonnelService){}

  ngOnInit(): void {
    this.typePersonnelService.getAll().subscribe((data)=>{
      this.personnels = data
     
    })
 
 }
 save(){
  let record  ={"label":"Principale"}

  this.typePersonnelService.save(record).subscribe()
 

}
  
}
