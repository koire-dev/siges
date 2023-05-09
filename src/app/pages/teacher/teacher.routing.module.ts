import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherNotesComponent } from './teacher-notes/teacher-notes.component';

export const routesTeacher: Routes = [
  {
    path:"dashboard",
    component : TeacherDashboardComponent
  },
];


