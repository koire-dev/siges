import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalViceDashboardComponent } from './principal-vice-dashboard/principal-vice-dashboard.component';

export const routesPrincipalVice: Routes = [
  {
    path:"dashboard",
    component : PrincipalViceDashboardComponent
  }
];


