import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypeAbsenceComponent } from './admin-type-absence.component';

describe('AdminTypeAbsenceComponent', () => {
  let component: AdminTypeAbsenceComponent;
  let fixture: ComponentFixture<AdminTypeAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTypeAbsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTypeAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
