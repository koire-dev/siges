import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomeDashboardComponent } from './econome-dashboard.component';

describe('EconomeDashboardComponent', () => {
  let component: EconomeDashboardComponent;
  let fixture: ComponentFixture<EconomeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
