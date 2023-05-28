import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSanctionsComponent } from './principal-sanctions.component';

describe('PrincipalSanctionsComponent', () => {
  let component: PrincipalSanctionsComponent;
  let fixture: ComponentFixture<PrincipalSanctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalSanctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalSanctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
