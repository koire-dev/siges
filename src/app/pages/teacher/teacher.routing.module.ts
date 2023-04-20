import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

export const routesTeacher: Routes = [
  {
    path:"dashboard",
    component : TeacherDashboardComponent
  }
];


