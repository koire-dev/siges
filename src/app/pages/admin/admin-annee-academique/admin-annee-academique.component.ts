import { Component, OnInit } from '@angular/core';
import { IAnneeAcademique } from 'src/app/interfaces/i-annee-academique';
import { AnneeAcademiqueService } from 'src/app/services/annee-academique/annee-academique.service';

@Component({
  selector: 'app-admin-annee-academique',
  templateUrl: './admin-annee-academique.component.html',
  styleUrls: ['./admin-annee-academique.component.css'],
})
export class AdminAnneeAcademiqueComponent implements OnInit{

  public years: any
  
  constructor( private anneeService:AnneeAcademiqueService){
    
  }

  ngOnInit(): void {
     this.anneeService.getAllYears().subscribe((data)=>{
       this.years = data
      
     })
  
  }

  
  enableYear(item:any) {
    this.anneeService.updateStatus(item.attributes['data-yearid'].value,"active")
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3); 
  }
  disableYear(item:any) {
    console.log(item.attributes['data-yearid'].value);
    this.anneeService.updateStatus(item.attributes['data-yearid'].value,"inactive")
    console.log(this.anneeService.updateStatus(item.attributes['data-yearid'].value,"inactive"))
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3); 

  }

}
