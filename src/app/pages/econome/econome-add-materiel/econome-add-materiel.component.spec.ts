import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomeAddMaterielComponent } from './econome-add-materiel.component';

describe('EconomeAddMaterielComponent', () => {
  let component: EconomeAddMaterielComponent;
  let fixture: ComponentFixture<EconomeAddMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomeAddMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomeAddMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
