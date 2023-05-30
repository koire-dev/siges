import { Component, OnInit } from '@angular/core';
import { IMatiere } from 'src/app/interfaces/i-matiere';
import { MatiereService } from 'src/app/services/matiere/matiere.service';

@Component({
  selector: 'app-admin-matiere',
  templateUrl: './admin-matiere.component.html',
  styleUrls: ['./admin-matiere.component.css']
})
export class AdminMatiereComponent  implements OnInit{

  public matieres:IMatiere[]=[]
  constructor(private matiereService:MatiereService){}

  ngOnInit(): void {
    this.matieres = this.matiereService.getAll();
  }
}
