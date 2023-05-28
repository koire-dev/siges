import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceAproposComponent } from './principal-vice-apropos.component';

describe('PrincipalViceAproposComponent', () => {
  let component: PrincipalViceAproposComponent;
  let fixture: ComponentFixture<PrincipalViceAproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceAproposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
