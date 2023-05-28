import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypePermissionComponent } from './admin-type-permission.component';

describe('AdminTypePermissionComponent', () => {
  let component: AdminTypePermissionComponent;
  let fixture: ComponentFixture<AdminTypePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTypePermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTypePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
