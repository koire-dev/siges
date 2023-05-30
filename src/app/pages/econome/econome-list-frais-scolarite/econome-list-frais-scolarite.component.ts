import { Component } from '@angular/core';
import { FraisScolariteModel } from 'src/app/models/frais-scolarite/frais-scolarite-model';
import { FraisScolariteService } from 'src/app/services/econome/frais-scolarite/frais-scolarite.service';

@Component({
  selector: 'app-econome-list-frais-scolarite',
  templateUrl: './econome-list-frais-scolarite.component.html',
  styleUrls: ['./econome-list-frais-scolarite.component.css'],
  providers: [ FraisScolariteService ]
})
export class EconomeListFraisScolariteComponent {
        // Initializer
    public payments: any
    constructor( private paymentService: FraisScolariteService){}

    // Get All entries
    ngOnInit(): void { 
        this.paymentService.getPayment().subscribe( (datas) =>{
          console.log(datas);
          this.payments =datas;
     })
   }
}
