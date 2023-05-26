import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMatiereComponent } from './principal-matiere.component';

describe('PrincipalMatiereComponent', () => {
  let component: PrincipalMatiereComponent;
  let fixture: ComponentFixture<PrincipalMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalMatiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
