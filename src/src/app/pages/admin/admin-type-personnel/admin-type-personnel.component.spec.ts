import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypePersonnelComponent } from './admin-type-personnel.component';

describe('AdminTypePersonnelComponent', () => {
  let component: AdminTypePersonnelComponent;
  let fixture: ComponentFixture<AdminTypePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTypePersonnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTypePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
