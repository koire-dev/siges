import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAnneeAcademiqueComponent } from './admin-annee-academique/admin-annee-academique.component';
import { AdminCycleComponent } from './admin-cycle/admin-cycle.component';
import { AdminFraisScolariteComponent } from './admin-frais-scolarite/admin-frais-scolarite.component';
import { AdminMatiereComponent } from './admin-matiere/admin-matiere.component';
import { AdminSalleClasseComponent } from './admin-salle-classe/admin-salle-classe.component';
import { AdminTypeAbsenceComponent } from './admin-type-absence/admin-type-absence.component';
import { AdminTypePermissionComponent } from './admin-type-permission/admin-type-permission.component';
import { AdminTypePersonnelComponent } from './admin-type-personnel/admin-type-personnel.component';
import { AdminTypeSanctionComponent } from './admin-type-sanction/admin-type-sanction.component';
import { AdminSerieComponent } from './admin-serie/admin-serie.component';
export const routesAdmin: Routes = [
  {
    path:"dashboard",
    component : AdminDashboardComponent
  },
  {
    path:"academicyear",component : AdminAnneeAcademiqueComponent
  },
  {
    path:"cycle",component : AdminCycleComponent
  },
  {
    path:"schoolfees",component : AdminFraisScolariteComponent
  },
  {
    path:"course",component : AdminMatiereComponent
  },
  {
    path:"classroom",component : AdminSalleClasseComponent
  },
  {
    path:"absenttype",component : AdminTypeAbsenceComponent
  },
  {
    path:"permissiontype",component : AdminTypePermissionComponent
  },
  {
    path:"personnaltype",component : AdminTypePersonnelComponent
  },
  {
    path:"sanctiontype",component : AdminTypeSanctionComponent
  },
  {
    path:"serie",component : AdminSerieComponent
  }
];


