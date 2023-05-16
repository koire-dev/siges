import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherStudynotesSequenceComponent} from './teacher-studynotes-sequence/teacher-studynotes-sequence.component';
import { TeacherStudynotesTrimestreComponent} from './teacher-studynotes-trimestre/teacher-studynotes-trimestre.component';
import { Studynotes02Component } from './studynote/studynotes02/studynotes02.component';

export const routesTeacher: Routes = [
  {
    path:"dashboard",
    component : TeacherDashboardComponent
  },
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
  }
];


