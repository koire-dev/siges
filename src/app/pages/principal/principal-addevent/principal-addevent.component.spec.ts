import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAddeventComponent } from './principal-addevent.component';

describe('PrincipalAddeventComponent', () => {
  let component: PrincipalAddeventComponent;
  let fixture: ComponentFixture<PrincipalAddeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalAddeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalAddeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
