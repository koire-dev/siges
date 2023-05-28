import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { IFraisScolarite } from 'src/app/interfaces/i-frais-scolarite';
import { FraisScolariteService } from 'src/app/services/frais-scolarite/frais-scolarite.service';

@Component({
  selector: 'app-admin-frais-scolarite',
  templateUrl: './admin-frais-scolarite.component.html',
  styleUrls: ['./admin-frais-scolarite.component.css']
})
export class AdminFraisScolariteComponent  implements OnInit{

  public paiements :any
  dataForm = new FormGroup({
    label: new FormControl(''),
    montant: new FormControl(''),
  });

  constructor(private paiementService: FraisScolariteService){}

  ngOnInit(): void {
    this.loadData()
 
 }
 loadData(){
   this.paiementService.getAll().subscribe((data)=>{
     this.paiements = data
    
   })
 }
 save() {
     
   this.paiementService.save(this.dataForm.value).subscribe()
   window.location.reload();
   this.loadData()
 }
}
