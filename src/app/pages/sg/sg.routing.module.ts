import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SgAskPermissionComponent } from './sg-ask-permission/sg-ask-permission.component';
import { SgListAskPermissionComponent } from './sg-list-ask-permission/sg-list-ask-permission.component';
import { SgListAbsentComponent } from './sg-list-absent/sg-list-absent.component';
import { SgRecordAbsentComponent } from './sg-record-absent/sg-record-absent.component';
import { SgJustifyAbsentComponent } from './sg-justify-absent/sg-justify-absent.component';
import { SgRecordSanctionComponent } from './sg-record-sanction/sg-record-sanction.component';
import { SgListSanctionComponent } from './sg-list-sanction/sg-list-sanction.component';
import { SgStateOfProgressComponent } from './sg-state-of-progress/sg-state-of-progress.component';
import { SgOverviewOfProgressComponent } from './sg-overview-of-progress/sg-overview-of-progress.component';
import { SgAllocateMaterialComponent } from './sg-allocate-material/sg-allocate-material.component';
import { SgListAllocateMaterialComponent } from './sg-list-allocate-material/sg-list-allocate-material.component';
import { SgMaterialInventoryComponent } from './sg-material-inventory/sg-material-inventory.component';

export const routesSG: Routes = [
  {
    path:"dashboard",
    component : DashboardComponent
  },
  {
    path:"askpermission",
    component : SgAskPermissionComponent
  },
  {
    path:"liskaskpermission",
    component : SgListAskPermissionComponent
  },
  {
    path:"listabsent",
    component : SgListAbsentComponent
  },
  {
    path:"recordabsent",
    component : SgRecordAbsentComponent
  },
  {
    path:"justifyabsent",
    component : SgJustifyAbsentComponent
  },
  {
    path:"recordsanction", component : SgRecordSanctionComponent
  },
  {
    path:"listsanction", component : SgListSanctionComponent
  },
  {
    path:"stateofprogress", component : SgStateOfProgressComponent
  },
  {
    path:"overviewofprogress", component : SgOverviewOfProgressComponent
  },
  {
    path:"allocatematerial", component : SgAllocateMaterialComponent
  },
  {
    path:"listallocatematerial", component : SgListAllocateMaterialComponent
  },
  {
    path:"materialinventory", component : SgMaterialInventoryComponent
  }
];


