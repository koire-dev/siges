import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/sg/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './pages/common/main-header/main-header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { SgSidebarComponent } from './pages/sg/sg-sidebar/sg-sidebar.component';
import { TeacherSidebarComponent } from './pages/teacher/teacher-sidebar/teacher-sidebar.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { PrincipalSidebarComponent } from './pages/principal/principal-sidebar/principal-sidebar.component';
import { PrincipalDashboardComponent } from './pages/principal/principal-dashboard/principal-dashboard.component';
import { PrincipalViceDashboardComponent } from './pages/principalVice/principal-vice-dashboard/principal-vice-dashboard.component';
import { PrincipalViceSidebarComponent } from './pages/principalVice/principal-vice-sidebar/principal-vice-sidebar.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainHeaderComponent,
    FooterComponent,
    SgSidebarComponent,
    TeacherSidebarComponent,
    TeacherDashboardComponent,
    PrincipalSidebarComponent,
    PrincipalDashboardComponent,
    PrincipalViceDashboardComponent,
    PrincipalViceSidebarComponent,
    AdminDashboardComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
