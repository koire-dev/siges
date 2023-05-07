import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgAllocateMaterialComponent } from './sg-allocate-material.component';

describe('SgAllocateMaterialComponent', () => {
  let component: SgAllocateMaterialComponent;
  let fixture: ComponentFixture<SgAllocateMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgAllocateMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgAllocateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
