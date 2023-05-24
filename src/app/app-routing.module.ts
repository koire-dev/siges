import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesSG } from './pages/sg/sg.routing.module';
import { routesTeacher } from './pages/teacher/teacher.routing.module';
import { routesPrincipal } from './pages/principal/principal.routing.module';
import { routesPrincipalVice } from './pages/principalVice/principalVice.routing.module';
import { routesAdmin } from './pages/admin/admin.routing.module';
import { LockScreenComponent } from './pages/common/lock-screen/lock-screen.component';
import { TeacherNotesComponent } from './pages/teacher/teacher-notes/teacher-notes.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherAddNotesComponent } from './pages/teacher/teacher-add-notes/teacher-add-notes.component';
import { routesEconome } from './pages/econome/econome.routing.module';

const routes: Routes = [
  {
    path:"lockscreen",
    component: LockScreenComponent
  },  
  {
    path:"sg",
    children :routesSG
  },
  {
    path:"econome",
    children :routesEconome
  },
  {
    path:"teacher",
    children :routesTeacher
  },
  {
    path:"principal",
    children :routesPrincipal
  },
  {
    path:"principalVice",
    children :routesPrincipalVice
  },
  {
    path:"admin",
    children :routesAdmin
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
