import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AnneeAcademiqueService } from 'src/app/services/annee-academique/annee-academique.service';

@Component({
  selector: 'app-admin-annee-academique',
  templateUrl: './admin-annee-academique.component.html',
  styleUrls: ['./admin-annee-academique.component.css'],
})
export class AdminAnneeAcademiqueComponent implements OnInit{

  public years: any
  dataForm = new FormGroup({
    date_debut: new FormControl(''),
    date_fin: new FormControl(''),
    statut: new FormControl(''),
  });
  constructor( private anneeService:AnneeAcademiqueService){
    
  }

  ngOnInit(): void {
     this.loadData()
  
  }
  loadData(){
    this.anneeService.getAllYears().subscribe((data)=>{
      this.years = data
     
    })
  }
  save() {
      this.dataForm.patchValue({
        statut: "inactive"
      })
    this.anneeService.save(this.dataForm.value).subscribe()
    window.location.reload();
    this.loadData()


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
