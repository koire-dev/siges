import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalDashboardComponent } from './principal-dashboard/principal-dashboard.component';
import { PrincipalAcademicComponent } from './principal-academic/principal-academic.component';
import { PrincipalCalendarComponent } from './principal-calendar/principal-calendar.component';
import { PrincipalAddeventComponent } from './principal-addevent/principal-addevent.component';
import { PrincipalAproposComponent } from './principal-apropos/principal-apropos.component';
import { PrincipalReglementComponent } from './principal-reglement/principal-reglement.component';
import { PrincipalSanctionsComponent } from './principal-sanctions/principal-sanctions.component';
import { PrincipalPreprintComponent } from './principal-preprint/principal-preprint.component';
import { PrincipalPrintComponent } from './principal-print/principal-print.component';
import { PrincipalMatiereComponent } from './principal-matiere/principal-matiere.component';
import { PrincipalInfoEtablissementComponent } from './principal-info-etablissement/principal-info-etablissement.component';

export const routesPrincipal: Routes = [
  {
    path:"dashboard",
    component : PrincipalDashboardComponent
  },
  {
    path:"academic",
    component : PrincipalAcademicComponent
  },
  {
    path:"calendar",
    component : PrincipalCalendarComponent
  },
  {
    path:"addEvent",
    component : PrincipalAddeventComponent
  },
  {
    path:"Apropos",
    component : PrincipalAproposComponent
  },
  {
    path:"reglement",
    component : PrincipalReglementComponent
  },
  {
    path:"sanction",
    component : PrincipalSanctionsComponent
  },
  {
    path:"preprint",
    component : PrincipalPreprintComponent
  },
  {
    path:"print",
    component : PrincipalPrintComponent
  },
  {
    path:"matiere",
    component : PrincipalMatiereComponent
  },
  {
    path:"infoEtablissement",
    component : PrincipalInfoEtablissementComponent
  }
];


