import { Component, OnInit } from '@angular/core';
import { ISerie } from 'src/app/interfaces/i-serie';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-admin-cycle',
  templateUrl: './admin-cycle.component.html',
  styleUrls: ['./admin-cycle.component.css']
})
export class AdminCycleComponent  implements OnInit{

  public series:ISerie[]= []
  constructor(private serieService : SerieService){}
  ngOnInit(): void {
   // this.series= this.serieService.getAll()
  }
}
