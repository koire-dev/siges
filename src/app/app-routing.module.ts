import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesSG } from './pages/sg/sg.routing.module';
import { routesTeacher } from './pages/teacher/teacher.routing.module';
import { routesPrincipal } from './pages/principal/principal.routing.module';
import { routesPrincipalVice } from './pages/principalVice/principalVice.routing.module';
import { routesAdmin } from './pages/admin/admin.routing.module';

const routes: Routes = [
  {
    path:"sg",
    children :routesSG
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
