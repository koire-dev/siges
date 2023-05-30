import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceAcademicComponent } from './principal-vice-academic.component';

describe('PrincipalViceAcademicComponent', () => {
  let component: PrincipalViceAcademicComponent;
  let fixture: ComponentFixture<PrincipalViceAcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceAcademicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
