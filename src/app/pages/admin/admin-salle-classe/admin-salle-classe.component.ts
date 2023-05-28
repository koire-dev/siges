import { SerieService } from './../../../services/serie/serie.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ISalleClasse } from 'src/app/interfaces/i-salle-classe';
import { CycleService } from 'src/app/services/cycle/cycle.service';
import { SalleClasseService } from 'src/app/services/salle-classe/salle-classe.service';

@Component({
  selector: 'app-admin-salle-classe',
  templateUrl: './admin-salle-classe.component.html',
  styleUrls: ['./admin-salle-classe.component.css']
})
export class AdminSalleClasseComponent implements OnInit {
  public salles: any
  public series: any
  public cycles: any
  dataForm = new FormGroup({
    label: new FormControl(''),
    cycle: new FormControl(''),
    serie: new FormControl(''),
  });

  constructor(private salleService: SalleClasseService, private serieService: SerieService, private cycleService: CycleService) { }
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.salleService.getAll().subscribe((data) => {
      this.salles = data

    })
    this.serieService.getAll().subscribe((data) => {
      this.series = data

    })
    this.cycleService.getAll().subscribe((data) => {
      this.cycles = data

    })
  }
  save() {
    
    // this.serieService.getById(this.dataForm.value.serie).subscribe((data) => {
    //   this.dataForm.patchValue({serie:{da}})


    // })
    // this.cycleService.getById(this.dataForm.value.cycle).subscribe((data) => {
    //   this.dataForm.patchValue({cycle:data})


    // })
    // console.log(this.dataForm.value.cycle);

  
    //console.log(this.dataForm.value)

    this.salleService.save(this.dataForm.value).subscribe()
    window.location.reload();
    this.loadData()
  }

}
