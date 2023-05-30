import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherMakeAppelComponent } from './teacher-make-appel/teacher-make-appel.component';
import { TeacherListAppelComponent } from './teacher-list-appel/teacher-list-appel.component';
import { TeacherTextbookComponent } from './teacher-textbook/teacher-textbook.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';

export const routesTeacher: Routes = [
  {
    path:"dashboard",
    component : TeacherDashboardComponent
  },
  {
    path:"make_appel",
    component : TeacherMakeAppelComponent
  },
  {
    path:"list_appel",
    component : TeacherListAppelComponent
  },
  {
    path:"textbook",
    component : TeacherTextbookComponent
  },
  {
    path:"list_notes",
    component : TeacherNotesComponent
  }
];


