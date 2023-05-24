import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';
import { TeacherAddNotesComponent } from './teacher-add-notes/teacher-add-notes.component';

export const routesTeacher: Routes = [
  {
    path:"dashboard",
    component : TeacherDashboardComponent
  },
  {
    path:"notes",
    component:TeacherNotesComponent
  },
  {
    path: "addNote",
    component: TeacherAddNotesComponent
  },
  {
    path:"dashTeach",
    component:TeacherDashboardComponent
  },
];


