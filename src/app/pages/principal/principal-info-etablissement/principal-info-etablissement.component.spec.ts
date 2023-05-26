import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalInfoEtablissementComponent } from './principal-info-etablissement.component';

describe('PrincipalInfoEtablissementComponent', () => {
  let component: PrincipalInfoEtablissementComponent;
  let fixture: ComponentFixture<PrincipalInfoEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalInfoEtablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalInfoEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
