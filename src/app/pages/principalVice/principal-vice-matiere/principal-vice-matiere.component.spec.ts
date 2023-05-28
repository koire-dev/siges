import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceMatiereComponent } from './principal-vice-matiere.component';

describe('PrincipalViceMatiereComponent', () => {
  let component: PrincipalViceMatiereComponent;
  let fixture: ComponentFixture<PrincipalViceMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceMatiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
