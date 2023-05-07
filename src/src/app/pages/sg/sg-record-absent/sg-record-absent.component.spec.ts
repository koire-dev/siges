import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgRecordAbsentComponent } from './sg-record-absent.component';

describe('SgRecordAbsentComponent', () => {
  let component: SgRecordAbsentComponent;
  let fixture: ComponentFixture<SgRecordAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgRecordAbsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgRecordAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
