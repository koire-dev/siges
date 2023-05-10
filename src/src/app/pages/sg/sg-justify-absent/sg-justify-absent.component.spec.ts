import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgJustifyAbsentComponent } from './sg-justify-absent.component';

describe('SgJustifyAbsentComponent', () => {
  let component: SgJustifyAbsentComponent;
  let fixture: ComponentFixture<SgJustifyAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgJustifyAbsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgJustifyAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
