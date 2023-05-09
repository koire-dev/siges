import { Component, OnInit } from '@angular/core';
import { ISalleClasse } from 'src/app/interfaces/i-salle-classe';
import { SalleClasseService } from 'src/app/services/salle-classe/salle-classe.service';

@Component({
  selector: 'app-admin-salle-classe',
  templateUrl: './admin-salle-classe.component.html',
  styleUrls: ['./admin-salle-classe.component.css']
})
export class AdminSalleClasseComponent implements OnInit {
  public salles:ISalleClasse[] = []

  constructor( private salleService : SalleClasseService){}

  ngOnInit(): void {
    this.salles = this.salleService.getAll();
  }

}
