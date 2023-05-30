import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCalendarComponent } from './principal-calendar.component';

describe('PrincipalCalendarComponent', () => {
  let component: PrincipalCalendarComponent;
  let fixture: ComponentFixture<PrincipalCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
