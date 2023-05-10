import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EconomeDashboardComponent } from './econome-dashboard/econome-dashboard.component';
import { EconomeAddFraisScolariteComponent } from './econome-add-frais-scolarite/econome-add-frais-scolarite.component';
import { EconomeListFraisScolariteComponent } from './econome-list-frais-scolarite/econome-list-frais-scolarite.component';

export const routesEconome: Routes = [
  {
    path:"dashboard",
    component : EconomeDashboardComponent
  },
  {
    path:"add_frais_scolarite",
    component : EconomeAddFraisScolariteComponent
  },
  {
    path:"list_frais_scolarite",
    component : EconomeListFraisScolariteComponent
  },
];


