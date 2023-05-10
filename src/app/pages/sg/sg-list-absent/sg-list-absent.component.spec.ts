import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgListAbsentComponent } from './sg-list-absent.component';

describe('SgListAbsentComponent', () => {
  let component: SgListAbsentComponent;
  let fixture: ComponentFixture<SgListAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgListAbsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgListAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
