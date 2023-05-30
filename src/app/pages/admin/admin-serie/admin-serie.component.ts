import { Component, OnInit } from '@angular/core';
import { ISerie } from 'src/app/interfaces/i-serie';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-admin-serie',
  templateUrl: './admin-serie.component.html',
  styleUrls: ['./admin-serie.component.css']
})
export class AdminSerieComponent implements OnInit {

  public series:ISerie[] = []
  constructor(private serieService : SerieService){}

  ngOnInit(): void {
    this.series = this.serieService.getAll()
  }

}
