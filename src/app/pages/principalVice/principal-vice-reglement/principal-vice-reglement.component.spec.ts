import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceReglementComponent } from './principal-vice-reglement.component';

describe('PrincipalViceReglementComponent', () => {
  let component: PrincipalViceReglementComponent;
  let fixture: ComponentFixture<PrincipalViceReglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceReglementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
