import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPrintComponent } from './principal-print.component';

describe('PrincipalPrintComponent', () => {
  let component: PrincipalPrintComponent;
  let fixture: ComponentFixture<PrincipalPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalPrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
