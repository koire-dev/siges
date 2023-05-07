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
import { SgAskPermissionComponent } from './pages/sg/sg-ask-permission/sg-ask-permission.component';
import { SgListAskPermissionComponent } from './pages/sg/sg-list-ask-permission/sg-list-ask-permission.component';
import { SgListAbsentComponent } from './pages/sg/sg-list-absent/sg-list-absent.component';
import { SgRecordAbsentComponent } from './pages/sg/sg-record-absent/sg-record-absent.component';
import { SgJustifyAbsentComponent } from './pages/sg/sg-justify-absent/sg-justify-absent.component';
import { SgRecordSanctionComponent } from './pages/sg/sg-record-sanction/sg-record-sanction.component';
import { SgListSanctionComponent } from './pages/sg/sg-list-sanction/sg-list-sanction.component';
import { SgStateOfProgressComponent } from './pages/sg/sg-state-of-progress/sg-state-of-progress.component';
import { SgOverviewOfProgressComponent } from './pages/sg/sg-overview-of-progress/sg-overview-of-progress.component';
import { SgAllocateMaterialComponent } from './pages/sg/sg-allocate-material/sg-allocate-material.component';
import { SgListAllocateMaterialComponent } from './pages/sg/sg-list-allocate-material/sg-list-allocate-material.component';
import { SgMaterialInventoryComponent } from './pages/sg/sg-material-inventory/sg-material-inventory.component';
import { LockScreenComponent } from './pages/common/lock-screen/lock-screen.component';
import { AdminAnneeAcademiqueComponent } from './pages/admin/admin-annee-academique/admin-annee-academique.component';
import { AdminCycleComponent } from './pages/admin/admin-cycle/admin-cycle.component';
import { AdminFraisScolariteComponent } from './pages/admin/admin-frais-scolarite/admin-frais-scolarite.component';
import { AdminMatiereComponent } from './pages/admin/admin-matiere/admin-matiere.component';
import { AdminSalleClasseComponent } from './pages/admin/admin-salle-classe/admin-salle-classe.component';
import { AdminTypeAbsenceComponent } from './pages/admin/admin-type-absence/admin-type-absence.component';
import { AdminTypePermissionComponent } from './pages/admin/admin-type-permission/admin-type-permission.component';
import { AdminTypePersonnelComponent } from './pages/admin/admin-type-personnel/admin-type-personnel.component';
import { AdminTypeSanctionComponent } from './pages/admin/admin-type-sanction/admin-type-sanction.component';
import { AdminSerieComponent } from './pages/admin/admin-serie/admin-serie.component';
import { ProfileComponent } from './pages/common/profile/profile.component';
import { SgProfileComponent } from './pages/sg/sg-profile/sg-profile.component';
import { AdminAccountManagerComponent } from './pages/admin/admin-account-manager/admin-account-manager.component';
import { AdminCreateAccountComponent } from './pages/admin/admin-create-account/admin-create-account.component';
import { AdminHistoriqueConnexionComponent } from './pages/admin/admin-historique-connexion/admin-historique-connexion.component';
import { AdminHistoriqueOperationComponent } from './pages/admin/admin-historique-operation/admin-historique-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainHeaderComponent,
    FooterComponent,
    SgSidebarComponent,
    SgAskPermissionComponent,
    TeacherSidebarComponent,
    TeacherDashboardComponent,
    PrincipalSidebarComponent,
    PrincipalDashboardComponent,
    PrincipalViceDashboardComponent,
    PrincipalViceSidebarComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    SgListAskPermissionComponent,
    SgListAbsentComponent,
    SgRecordAbsentComponent,
    SgJustifyAbsentComponent,
    SgRecordSanctionComponent,
    SgListSanctionComponent,
    SgStateOfProgressComponent,
    SgOverviewOfProgressComponent,
    SgAllocateMaterialComponent,
    SgListAllocateMaterialComponent,
    SgMaterialInventoryComponent,
    SgProfileComponent,
    LockScreenComponent,

    AdminAnneeAcademiqueComponent,
    AdminCycleComponent,
    AdminFraisScolariteComponent,
    AdminMatiereComponent,
    AdminSalleClasseComponent,
    AdminTypeAbsenceComponent,
    AdminTypePermissionComponent,
    AdminTypePersonnelComponent,
    AdminTypeSanctionComponent,
    AdminSerieComponent,
    AdminAccountManagerComponent,
    AdminCreateAccountComponent,
    AdminHistoriqueConnexionComponent,
    AdminHistoriqueOperationComponent,
    ProfileComponent
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
