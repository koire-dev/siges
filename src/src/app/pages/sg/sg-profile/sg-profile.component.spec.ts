import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgProfileComponent } from './sg-profile.component';

describe('SgProfileComponent', () => {
  let component: SgProfileComponent;
  let fixture: ComponentFixture<SgProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
