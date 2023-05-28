import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomeAddFraisScolariteComponent } from './econome-add-frais-scolarite.component';

describe('EconomeAddFraisScolariteComponent', () => {
  let component: EconomeAddFraisScolariteComponent;
  let fixture: ComponentFixture<EconomeAddFraisScolariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomeAddFraisScolariteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomeAddFraisScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
