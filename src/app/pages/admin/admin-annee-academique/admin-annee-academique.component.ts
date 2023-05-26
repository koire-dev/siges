import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeModel } from 'src/app/models/annee/annee-model';
import { AnneeAcademiqueService } from 'src/app/services/annee-academique/annee-academique.service';

@Component({
  selector: 'app-admin-annee-academique',
  templateUrl: './admin-annee-academique.component.html',
  styleUrls: ['./admin-annee-academique.component.css'],
  providers: [ AnneeAcademiqueService ]
})
export class AdminAnneeAcademiqueComponent implements OnInit{
 //Redirection
  goToYearList(){
      this.router.navigate(['/admin/academicyear'])
  }

    //To save year in the database
    annee: AnneeModel = new AnneeModel();
    onSubmit(){
      console.log(this.annee)
      this.saveYear();
      this.goToYearList();
    }

    // To getAll Years in with 
    public years: any
    constructor( private anneeService:AnneeAcademiqueService, private router:Router ){}

    ngOnInit(): void { 
          this.anneeService.getYears().subscribe( (datas) =>{
          this.years =datas;
      })
  }
  //Save Year
  saveYear(){
    this.anneeService.addYear(this.annee).subscribe(
      (datas) =>{
         console.log(datas);
       },
       error => console.log(error)
       )
  }
  //Update Year
  updateYear(id: string)
  {
    this.router.navigate(['/admin/edit_academicyear', id])
  }
  
  //  //delete Year
   deleteYear(id: string)
   {
      this.anneeService.deleteYear(id).subscribe(
        (datas) =>{
            console.log(datas);
            this.ngOnInit();
        },
        error => console.log(error)
        )
   }
 
 





}
