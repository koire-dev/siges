import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgListAllocateMaterialComponent } from './sg-list-allocate-material.component';

describe('SgListAllocateMaterialComponent', () => {
  let component: SgListAllocateMaterialComponent;
  let fixture: ComponentFixture<SgListAllocateMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgListAllocateMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgListAllocateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
