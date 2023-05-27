import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ITypePermission } from 'src/app/interfaces/i-type-permission';
import { TypePermissionService } from 'src/app/services/type-permission/type-permission.service';

@Component({
  selector: 'app-admin-type-permission',
  templateUrl: './admin-type-permission.component.html',
  styleUrls: ['./admin-type-permission.component.css']
})
export class AdminTypePermissionComponent implements OnInit {
  public permissions: any
  dataForm = new FormGroup({
    label: new FormControl(''),
  });
  constructor(private permissionService: TypePermissionService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    this.permissionService.getAll().subscribe((data) => {
      this.permissions = data

    })
  }
  save() {

    this.permissionService.save(this.dataForm.value).subscribe()
    window.location.reload();
    this.loadData()

  }

}
