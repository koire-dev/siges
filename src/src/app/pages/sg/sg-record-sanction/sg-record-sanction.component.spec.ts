import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgRecordSanctionComponent } from './sg-record-sanction.component';

describe('SgRecordSanctionComponent', () => {
  let component: SgRecordSanctionComponent;
  let fixture: ComponentFixture<SgRecordSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgRecordSanctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgRecordSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
