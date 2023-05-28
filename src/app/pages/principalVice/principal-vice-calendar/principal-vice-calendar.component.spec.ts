import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceCalendarComponent } from './principal-vice-calendar.component';

describe('PrincipalViceCalendarComponent', () => {
  let component: PrincipalViceCalendarComponent;
  let fixture: ComponentFixture<PrincipalViceCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
