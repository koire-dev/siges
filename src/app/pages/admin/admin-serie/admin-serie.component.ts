import { Component, OnInit } from '@angular/core';
import { ISerie } from 'src/app/interfaces/i-serie';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-admin-serie',
  templateUrl: './admin-serie.component.html',
  styleUrls: ['./admin-serie.component.css']
})
export class AdminSerieComponent implements OnInit {

  public series:any
  constructor(private serieService : SerieService){}

  ngOnInit(): void {
    this.serieService.getAll().subscribe((data)=>{
      this.series = data
     
    })
 
 }
 save(){
  let record  ={"label":"C"}

  this.serieService.save(record).subscribe()
 

}

}
