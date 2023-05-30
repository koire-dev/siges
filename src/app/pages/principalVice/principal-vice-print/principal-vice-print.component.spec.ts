import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalVicePrintComponent } from './principal-vice-print.component';

describe('PrincipalVicePrintComponent', () => {
  let component: PrincipalVicePrintComponent;
  let fixture: ComponentFixture<PrincipalVicePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalVicePrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalVicePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
