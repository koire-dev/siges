import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFraisScolariteComponent } from './admin-frais-scolarite.component';

describe('AdminFraisScolariteComponent', () => {
  let component: AdminFraisScolariteComponent;
  let fixture: ComponentFixture<AdminFraisScolariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFraisScolariteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFraisScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
