import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomeListMaterielComponent } from './econome-list-materiel.component';

describe('EconomeListMaterielComponent', () => {
  let component: EconomeListMaterielComponent;
  let fixture: ComponentFixture<EconomeListMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomeListMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomeListMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
