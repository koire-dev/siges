import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnneeAcademiqueComponent } from './admin-annee-academique.component';

describe('AdminAnneeAcademiqueComponent', () => {
  let component: AdminAnneeAcademiqueComponent;
  let fixture: ComponentFixture<AdminAnneeAcademiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnneeAcademiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAnneeAcademiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
