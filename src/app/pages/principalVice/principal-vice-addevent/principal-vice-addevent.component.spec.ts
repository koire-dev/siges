import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceAddeventComponent } from './principal-vice-addevent.component';

describe('PrincipalViceAddeventComponent', () => {
  let component: PrincipalViceAddeventComponent;
  let fixture: ComponentFixture<PrincipalViceAddeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceAddeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceAddeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
