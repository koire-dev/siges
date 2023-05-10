import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountManagerComponent } from './admin-account-manager.component';

describe('AdminAccountManagerComponent', () => {
  let component: AdminAccountManagerComponent;
  let fixture: ComponentFixture<AdminAccountManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccountManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
