import { Component, OnInit } from '@angular/core';
import { IFraisScolarite } from 'src/app/interfaces/i-frais-scolarite';
import { FraisScolariteService } from 'src/app/services/frais-scolarite/frais-scolarite.service';

@Component({
  selector: 'app-admin-frais-scolarite',
  templateUrl: './admin-frais-scolarite.component.html',
  styleUrls: ['./admin-frais-scolarite.component.css']
})
export class AdminFraisScolariteComponent  implements OnInit{

  public paiements :IFraisScolarite[] =[]

  constructor(private paiementService: FraisScolariteService){}

  public ngOnInit(): void {
    this.paiements = this.paiementService.getAll();
    
  }
}
