import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatiereComponent } from './admin-matiere.component';

describe('AdminMatiereComponent', () => {
  let component: AdminMatiereComponent;
  let fixture: ComponentFixture<AdminMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMatiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
