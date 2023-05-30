import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPreprintComponent } from './principal-preprint.component';

describe('PrincipalPreprintComponent', () => {
  let component: PrincipalPreprintComponent;
  let fixture: ComponentFixture<PrincipalPreprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalPreprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalPreprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
