import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesSG } from './pages/sg/sg.routing.module';
import { routesTeacher } from './pages/teacher/teacher.routing.module';
import { routesPrincipal } from './pages/principal/principal.routing.module';
import { routesPrincipalVice } from './pages/principalVice/principalVice.routing.module';
import { routesAdmin } from './pages/admin/admin.routing.module';
import { LockScreenComponent } from './pages/common/lock-screen/lock-screen.component';
import { routesEconome } from './pages/econome/econome.routing.module';
import { LoginComponent } from './pages/common/login/login.component';

const routes: Routes = [
  {
    path : "",
    component: LoginComponent
  },
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
//  Mabdel region
  {
    path:"econome",
    children :routesEconome
  },
  {
    path:"login",
    component : LoginComponent
  },

//  end region




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
