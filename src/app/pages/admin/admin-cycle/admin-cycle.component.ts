import { CycleService } from './../../../services/cycle/cycle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-cycle',
  templateUrl: './admin-cycle.component.html',
  styleUrls: ['./admin-cycle.component.css']
})
export class AdminCycleComponent  implements OnInit{

  public cycles:any
  constructor(private cycleService : CycleService){}
  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    this.cycleService.getAll().subscribe((data) => {
      this.cycles = data

    })
  }
}
