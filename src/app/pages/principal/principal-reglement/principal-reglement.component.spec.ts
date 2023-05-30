import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalReglementComponent } from './principal-reglement.component';

describe('PrincipalReglementComponent', () => {
  let component: PrincipalReglementComponent;
  let fixture: ComponentFixture<PrincipalReglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalReglementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
