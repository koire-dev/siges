import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAproposComponent } from './principal-apropos.component';

describe('PrincipalAproposComponent', () => {
  let component: PrincipalAproposComponent;
  let fixture: ComponentFixture<PrincipalAproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAproposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
