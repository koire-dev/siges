import { Component, OnInit } from '@angular/core';
import { IAnneeAcademique } from 'src/app/interfaces/i-annee-academique';
import { AnneeAcademiqueService } from 'src/app/services/annee-academique/annee-academique.service';

@Component({
  selector: 'app-admin-annee-academique',
  templateUrl: './admin-annee-academique.component.html',
  styleUrls: ['./admin-annee-academique.component.css']
})
export class AdminAnneeAcademiqueComponent implements OnInit{

  public annees : IAnneeAcademique[] =[]
  public statut :String ="active"
  constructor( private anneeService:AnneeAcademiqueService){}

  ngOnInit(): void {
  this.annees = this.anneeService.getAll()
  }

}
