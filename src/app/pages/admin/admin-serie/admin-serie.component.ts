import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ISerie } from 'src/app/interfaces/i-serie';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-admin-serie',
  templateUrl: './admin-serie.component.html',
  styleUrls: ['./admin-serie.component.css']
})
export class AdminSerieComponent implements OnInit {

  public series: any
  dataForm = new FormGroup({
    label: new FormControl(''),
  });
  constructor(private serieService: SerieService) { }

  ngOnInit(): void {

    this.loadData()
  }
  loadData() {
    this.serieService.getAll().subscribe((data) => {
      this.series = data

    })
  }
  save() {

    this.serieService.save(this.dataForm.value).subscribe()
    window.location.reload();
    this.loadData()


  }

}
