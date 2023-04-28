import { Component, OnInit } from '@angular/core';
import { ITypeSanction } from 'src/app/interfaces/i-type-sanction';
import { TypeSanctionService } from 'src/app/services/type-sanction/type-sanction.service';

@Component({
  selector: 'app-admin-type-sanction',
  templateUrl: './admin-type-sanction.component.html',
  styleUrls: ['./admin-type-sanction.component.css']
})
export class AdminTypeSanctionComponent  implements OnInit{

  public sanctions : ITypeSanction[]=[]
 constructor(private sanctionService: TypeSanctionService){}
 ngOnInit(): void {
   this.sanctions=this.sanctionService.getAll()
 }
}
