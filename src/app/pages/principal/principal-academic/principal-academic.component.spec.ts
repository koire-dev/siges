import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAcademicComponent } from './principal-academic.component';

describe('PrincipalAcademicComponent', () => {
  let component: PrincipalAcademicComponent;
  let fixture: ComponentFixture<PrincipalAcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAcademicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
