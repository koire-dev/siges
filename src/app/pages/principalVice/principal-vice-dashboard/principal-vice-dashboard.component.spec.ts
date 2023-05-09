import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceDashboardComponent } from './principal-vice-dashboard.component';

describe('PrincipalViceDashboardComponent', () => {
  let component: PrincipalViceDashboardComponent;
  let fixture: ComponentFixture<PrincipalViceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
