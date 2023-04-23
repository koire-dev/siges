import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypeSanctionComponent } from './admin-type-sanction.component';

describe('AdminTypeSanctionComponent', () => {
  let component: AdminTypeSanctionComponent;
  let fixture: ComponentFixture<AdminTypeSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTypeSanctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTypeSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
