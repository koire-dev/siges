import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCycleComponent } from './admin-cycle.component';

describe('AdminCycleComponent', () => {
  let component: AdminCycleComponent;
  let fixture: ComponentFixture<AdminCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
