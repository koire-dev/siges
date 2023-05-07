import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalleClasseComponent } from './admin-salle-classe.component';

describe('AdminSalleClasseComponent', () => {
  let component: AdminSalleClasseComponent;
  let fixture: ComponentFixture<AdminSalleClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSalleClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSalleClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
