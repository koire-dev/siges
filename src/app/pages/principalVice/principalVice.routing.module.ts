import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalViceDashboardComponent } from './principal-vice-dashboard/principal-vice-dashboard.component';
import { StudynoteBoardComponent } from './principalVice-studynote/studynote-board/studynote-board.component';
import { Studynotes02Component } from './principalVice-studynote/studynotes02/studynotes02.component';
import { TeacherStudynotesSequenceComponent } from './principalVice-studynote/teacher-studynotes-sequence/teacher-studynotes-sequence.component';
import { TeacherStudynotesTrimestreComponent } from './principalVice-studynote/teacher-studynotes-trimestre/teacher-studynotes-trimestre.component';
import { PrincipalReglementComponent } from '../principal/principal-reglement/principal-reglement.component';
import { PrincipalViceAcademicComponent } from './principal-vice-academic/principal-vice-academic.component';
import { PrincipalViceAddeventComponent } from './principal-vice-addevent/principal-vice-addevent.component';
import { PrincipalViceAproposComponent } from './principal-vice-apropos/principal-vice-apropos.component';
import { PrincipalViceCalendarComponent } from './principal-vice-calendar/principal-vice-calendar.component';
import { PrincipalViceMatiereComponent } from './principal-vice-matiere/principal-vice-matiere.component';
import { PrincipalVicePreprintComponent } from './principal-vice-preprint/principal-vice-preprint.component';
import { PrincipalVicePrintComponent } from './principal-vice-print/principal-vice-print.component';
import { PrincipalViceSanctionsComponent } from './principal-vice-sanctions/principal-vice-sanctions.component';

export const routesPrincipalVice: Routes = [
  {
    path:"dashboard",
    component : PrincipalViceDashboardComponent
  }
  ,
  {
    path:"bulletin_sequence",
    component : TeacherStudynotesSequenceComponent
  },
  {
    path:"bulletin02",
    component : Studynotes02Component 
  },
  {
    path:"bulletin01",
    component : TeacherStudynotesTrimestreComponent
  },
    {
    path:"bulletin",
    component : StudynoteBoardComponent
  },
  {
    path:"academic",
    component :  PrincipalViceAcademicComponent
  },
  {
    path:"addevent",
    component : PrincipalViceAddeventComponent
    
  }, 
  {
    path:"apropos",
    component : PrincipalViceAproposComponent
    
  },
  {
    path:"matiere",
    component : PrincipalViceMatiereComponent
    
  },
  {
    path:"preprint",
    component : PrincipalVicePreprintComponent
    
  },
  {
    path:"print",
    component : PrincipalVicePrintComponent
    
  },
  {
    path:"reglement",
    component : PrincipalReglementComponent
    
  },
  {
    path:"sanctions",
    component : PrincipalViceSanctionsComponent
    
  },
  {
    path:"calendar",
    component : PrincipalViceCalendarComponent
    
  },

];


