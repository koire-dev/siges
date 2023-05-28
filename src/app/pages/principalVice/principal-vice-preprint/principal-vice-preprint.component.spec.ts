import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalVicePreprintComponent } from './principal-vice-preprint.component';

describe('PrincipalVicePreprintComponent', () => {
  let component: PrincipalVicePreprintComponent;
  let fixture: ComponentFixture<PrincipalVicePreprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalVicePreprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalVicePreprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
