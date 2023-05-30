import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceSanctionsComponent } from './principal-vice-sanctions.component';

describe('PrincipalViceSanctionsComponent', () => {
  let component: PrincipalViceSanctionsComponent;
  let fixture: ComponentFixture<PrincipalViceSanctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceSanctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceSanctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
