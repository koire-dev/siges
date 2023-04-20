import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
export const routesAdmin: Routes = [
  {
    path:"dashboard",
    component : AdminDashboardComponent
  }
];


