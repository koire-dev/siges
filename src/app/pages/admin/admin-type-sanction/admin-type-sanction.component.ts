import { Component, OnInit } from '@angular/core';

import { TypeSanctionService } from 'src/app/services/type-sanction/type-sanction.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-admin-type-sanction',
  templateUrl: './admin-type-sanction.component.html',
  styleUrls: ['./admin-type-sanction.component.css']
})
export class AdminTypeSanctionComponent implements OnInit {

  public sanctions: any
  dataForm = new FormGroup({
    label: new FormControl(''),
  });
  constructor(private sanctionService: TypeSanctionService) { }
  ngOnInit(): void {

    this.loadTypeSanction()
    console.log(this.sanctions)

  }

  loadTypeSanction() {
    this.sanctions= ""
    this.sanctions = this.sanctionService.getAll().subscribe((data) => {
      this.sanctions = data
    })
  }
  save() {
    //console.log(this.dataForm.value)
    this.sanctionService.save(this.dataForm.value).subscribe()
    window.location.reload();


  }

  delete(item:any){
    //console.log(item.attributes['data-id'])
    this.sanctionService.delete(item.attributes['data-id'])
    //window.location.reload();
    this.loadTypeSanction()
  }
}
