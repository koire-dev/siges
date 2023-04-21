import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgOverviewOfProgressComponent } from './sg-overview-of-progress.component';

describe('SgOverviewOfProgressComponent', () => {
  let component: SgOverviewOfProgressComponent;
  let fixture: ComponentFixture<SgOverviewOfProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgOverviewOfProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgOverviewOfProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
