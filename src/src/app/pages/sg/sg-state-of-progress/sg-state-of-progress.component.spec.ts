import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgStateOfProgressComponent } from './sg-state-of-progress.component';

describe('SgStateOfProgressComponent', () => {
  let component: SgStateOfProgressComponent;
  let fixture: ComponentFixture<SgStateOfProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgStateOfProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgStateOfProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
