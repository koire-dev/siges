import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EconomeDashboardComponent } from './econome-dashboard/econome-dashboard.component';
import { EconomeAddFraisScolariteComponent } from './econome-add-frais-scolarite/econome-add-frais-scolarite.component';
import { EconomeListFraisScolariteComponent } from './econome-list-frais-scolarite/econome-list-frais-scolarite.component';
import { EconomeAddMaterielComponent } from './econome-add-materiel/econome-add-materiel.component';
import { EconomeListMaterielComponent } from './econome-list-materiel/econome-list-materiel.component';


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
  {
    path:"add_materiel",
    component : EconomeAddMaterielComponent
  },
  {
    path:"list_materiel",
    component : EconomeListMaterielComponent
  },
];


