import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditAnneeAcademiqueComponent } from './admin-edit-annee-academique.component';

describe('AdminEditAnneeAcademiqueComponent', () => {
  let component: AdminEditAnneeAcademiqueComponent;
  let fixture: ComponentFixture<AdminEditAnneeAcademiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditAnneeAcademiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditAnneeAcademiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
