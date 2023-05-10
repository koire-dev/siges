import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalDashboardComponent } from './principal-dashboard/principal-dashboard.component';

export const routesPrincipal: Routes = [
  {
    path:"dashboard",
    component : PrincipalDashboardComponent
  }
];


