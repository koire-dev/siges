import { Component, OnInit } from '@angular/core';
import { MatiereService } from 'src/app/services/matiere/matiere.service';

@Component({
  selector: 'app-admin-matiere',
  templateUrl: './admin-matiere.component.html',
  styleUrls: ['./admin-matiere.component.css']
})
export class AdminMatiereComponent  implements OnInit{

  public matieres:any
  constructor(private matiereService:MatiereService){}

  
  ngOnInit(): void {
    this.matiereService.getAll().subscribe((data)=>{
      this.matieres = data
     
    })
 
 }
 save(){
  let record  ={"label":"Philo"}

  this.matiereService.save(record).subscribe()
 

}
}
