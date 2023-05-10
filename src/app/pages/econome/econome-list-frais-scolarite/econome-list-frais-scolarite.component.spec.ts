import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomeListFraisScolariteComponent } from './econome-list-frais-scolarite.component';

describe('EconomeListFraisScolariteComponent', () => {
  let component: EconomeListFraisScolariteComponent;
  let fixture: ComponentFixture<EconomeListFraisScolariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomeListFraisScolariteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomeListFraisScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
