import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FraisScolariteModel } from 'src/app/models/frais-scolarite/frais-scolarite-model';
import { TrancheModel } from 'src/app/models/tranche/tranche-model';
import { FraisScolariteService } from 'src/app/services/econome/frais-scolarite/frais-scolarite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-econome-add-frais-scolarite',
  templateUrl: './econome-add-frais-scolarite.component.html',
  styleUrls: ['./econome-add-frais-scolarite.component.css'],
  providers: [ FraisScolariteService ]
})
export class EconomeAddFraisScolariteComponent  implements OnInit{
    // Initializer
    constructor( private paymentService: FraisScolariteService, private router:Router ){}
      //If onSubmit button was clicked
       payment: FraisScolariteModel = new FraisScolariteModel();

       tranches: any;

    //  Get All entries
      ngOnInit(): void { 
         this.tranches= this.paymentService.getPayment();
      }

    //Redirection
      goToPaymentList(){
         this.router.navigate(['/econome/list_frais_scolarite'])
      }

    
    onSubmit(){
        console.log(this.payment)
        this.savePayment();
        this.goToPaymentList();
    }

    //Save Payment
    savePayment(){
      this.paymentService.addPayment(this.payment).subscribe(
        (datas) =>{
            console.log(datas);
        },
            error => console.log(error)
        )
    }

}
