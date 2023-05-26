import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneeModel } from 'src/app/models/annee/annee-model';
import { AnneeAcademiqueService } from 'src/app/services/annee-academique/annee-academique.service';

@Component({
  selector: 'app-admin-edit-annee-academique',
  templateUrl: './admin-edit-annee-academique.component.html',
  styleUrls: ['./admin-edit-annee-academique.component.css'],
  providers: [ AnneeAcademiqueService ]
})
export class AdminEditAnneeAcademiqueComponent  implements OnInit{

    constructor( private anneeService:AnneeAcademiqueService, private route: ActivatedRoute, private router: Router ){}

    //new instance of Class model
    public year: any
    annee: AnneeModel = new AnneeModel();
    id:any

    //Redirection
    goToYearList(){
      this.router.navigate(['/admin/academicyear'])
    }

    //get element by Id
    ngOnInit(): void {
 
        this.id = this.route.snapshot.params['id'];

        this.anneeService.getYearById(this.id).subscribe ((data) => {
          console.log(data);
          this.year = data;
        },
        error => console.log(error)
        )
    }

    //Submit data Form To Edit
    onSubmit(){
      this.anneeService.updateYear( this.id,  this.year)
      .subscribe ((data) => {
          console.log(data);
          this.goToYearList();
      },
        error => console.log(error)
      )
    }

  

}
