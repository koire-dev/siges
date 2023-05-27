import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MatiereService } from 'src/app/services/matiere/matiere.service';

@Component({
  selector: 'app-admin-matiere',
  templateUrl: './admin-matiere.component.html',
  styleUrls: ['./admin-matiere.component.css']
})
export class AdminMatiereComponent  implements OnInit{

  public matieres:any
  dataForm = new FormGroup({
    intitule: new FormControl(''),
  });
  constructor(private matiereService:MatiereService){}

  
  ngOnInit(): void {
    this.loadData()
 
 }
 loadData(){
  this.matiereService.getAll().subscribe((data)=>{
    this.matieres = data
   
  })
 }
 save(){
  
  this.matiereService.save(this.dataForm.value).subscribe()
  window.location.reload();
    this.loadData()
 

}
}
