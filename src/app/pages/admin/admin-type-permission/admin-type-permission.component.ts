import { Component, OnInit } from '@angular/core';
import { ITypePermission } from 'src/app/interfaces/i-type-permission';
import { TypePermissionService } from 'src/app/services/type-permission/type-permission.service';

@Component({
  selector: 'app-admin-type-permission',
  templateUrl: './admin-type-permission.component.html',
  styleUrls: ['./admin-type-permission.component.css']
})
export class AdminTypePermissionComponent implements OnInit {
  public permissions:ITypePermission[] = []
  constructor(private permissionService: TypePermissionService){}

  ngOnInit(): void {
    this.permissions = this.permissionService.getAll()
  }
}
