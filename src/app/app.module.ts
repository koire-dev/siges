import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/sg/dashboard/dashboard.component';
import { MainHeaderComponent } from './pages/common/main-header/main-header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { SgSidebarComponent } from './pages/sg/sg-sidebar/sg-sidebar.component';

// region abdel
import { TeacherSidebarComponent } from './pages/teacher/teacher-sidebar/teacher-sidebar.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherMakeAppelComponent } from './pages/teacher/teacher-make-appel/teacher-make-appel.component';
import { TeacherListAppelComponent } from './pages/teacher/teacher-list-appel/teacher-list-appel.component';
import { TeacherTextbookComponent } from './pages/teacher/teacher-textbook/teacher-textbook.component';
import { TeacherNotesComponent } from './pages/teacher/teacher-notes/teacher-notes.component';

//end region
import { PrincipalViceDashboardComponent } from './pages/principalVice/principal-vice-dashboard/principal-vice-dashboard.component';
import { PrincipalViceSidebarComponent } from './pages/principalVice/principal-vice-sidebar/principal-vice-sidebar.component';
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
// region Admin
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';

import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';
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
//region abdel
import { EconomeDashboardComponent } from './pages/econome/econome-dashboard/econome-dashboard.component';
import { EconomeSidebarComponent } from './pages/econome/econome-sidebar/econome-sidebar.component';
import { EconomeAddFraisScolariteComponent } from './pages/econome/econome-add-frais-scolarite/econome-add-frais-scolarite.component';
import { EconomeListFraisScolariteComponent } from './pages/econome/econome-list-frais-scolarite/econome-list-frais-scolarite.component';
import { EconomeAddMaterielComponent } from './pages/econome/econome-add-materiel/econome-add-materiel.component';
import { EconomeListMaterielComponent } from './pages/econome/econome-list-materiel/econome-list-materiel.component';
//--common
//end region

//Principal
import { PrincipalSidebarComponent } from './pages/principal/principal-sidebar/principal-sidebar.component';
import { PrincipalDashboardComponent } from './pages/principal/principal-dashboard/principal-dashboard.component';
import { PrincipalAcademicComponent } from './pages/principal/principal-academic/principal-academic.component';
import { PrincipalAproposComponent } from './pages/principal/principal-apropos/principal-apropos.component';
import { PrincipalCalendarComponent } from './pages/principal/principal-calendar/principal-calendar.component';
import { PrincipalAddeventComponent } from './pages/principal/principal-addevent/principal-addevent.component';
import { PrincipalReglementComponent } from './pages/principal/principal-reglement/principal-reglement.component';
import { PrincipalSanctionsComponent } from './pages/principal/principal-sanctions/principal-sanctions.component';
import { PrincipalPreprintComponent } from './pages/principal/principal-preprint/principal-preprint.component';
import { PrincipalPrintComponent } from './pages/principal/principal-print/principal-print.component';
import { PrincipalMatiereComponent } from './pages/principal/principal-matiere/principal-matiere.component';
import { PrincipalInfoEtablissementComponent } from './pages/principal/principal-info-etablissement/principal-info-etablissement.component';
import { StudynoteBoardComponent } from './pages/principalVice/principalVice-studynote/studynote-board/studynote-board.component';
import { Studynotes02Component } from './pages/principalVice/principalVice-studynote/studynotes02/studynotes02.component';
import { TeacherStudynotesSequenceComponent } from './pages/principalVice/principalVice-studynote/teacher-studynotes-sequence/teacher-studynotes-sequence.component';
import { TeacherStudynotesTrimestreComponent } from './pages/principalVice/principalVice-studynote/teacher-studynotes-trimestre/teacher-studynotes-trimestre.component';
import { PrincipalViceAcademicComponent } from './pages/principalVice/principal-vice-academic/principal-vice-academic.component';
import { PrincipalViceAddeventComponent } from './pages/principalVice/principal-vice-addevent/principal-vice-addevent.component';
import { PrincipalViceAproposComponent } from './pages/principalVice/principal-vice-apropos/principal-vice-apropos.component';
import { PrincipalViceCalendarComponent } from './pages/principalVice/principal-vice-calendar/principal-vice-calendar.component';
import { PrincipalViceMatiereComponent } from './pages/principalVice/principal-vice-matiere/principal-vice-matiere.component';
import { PrincipalVicePreprintComponent } from './pages/principalVice/principal-vice-preprint/principal-vice-preprint.component';
import { PrincipalVicePrintComponent } from './pages/principalVice/principal-vice-print/principal-vice-print.component';
import { PrincipalViceReglementComponent } from './pages/principalVice/principal-vice-reglement/principal-vice-reglement.component';
import { PrincipalViceSanctionsComponent } from './pages/principalVice/principal-vice-sanctions/principal-vice-sanctions.component';
import { MainHeader2Component } from './pages/common/main-header2/main-header2.component';
//end region*
//principalVice

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainHeaderComponent,
    MainHeader2Component,
    FooterComponent,
    SgSidebarComponent,
    SgAskPermissionComponent,
    
// region abdel
    TeacherSidebarComponent,
    TeacherDashboardComponent,
    TeacherMakeAppelComponent,
    TeacherListAppelComponent,
    TeacherTextbookComponent,
    TeacherNotesComponent,

// region principal
    PrincipalSidebarComponent,
    PrincipalDashboardComponent,
    PrincipalAcademicComponent,
    PrincipalAproposComponent,
    PrincipalCalendarComponent,
    PrincipalAddeventComponent,
    PrincipalReglementComponent,
    PrincipalSanctionsComponent,
    PrincipalPreprintComponent,
    PrincipalPrintComponent,
    PrincipalMatiereComponent,
    PrincipalInfoEtablissementComponent,
// end region
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
//  Admin
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
    ProfileComponent,
// Econome Part
    EconomeDashboardComponent,
    EconomeSidebarComponent,
    EconomeAddFraisScolariteComponent,
    EconomeListFraisScolariteComponent,
    EconomeAddMaterielComponent,
    EconomeListMaterielComponent,
    //MainHeader2Component,
    //principalVice
    Studynotes02Component,
    StudynoteBoardComponent,
    TeacherStudynotesSequenceComponent,
    TeacherStudynotesTrimestreComponent,
    PrincipalViceAcademicComponent,
    PrincipalViceAddeventComponent,
    PrincipalViceAproposComponent,
    PrincipalViceCalendarComponent,
    PrincipalViceMatiereComponent,
    PrincipalVicePreprintComponent,
    PrincipalVicePrintComponent,
    PrincipalViceReglementComponent,
    PrincipalViceSanctionsComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
