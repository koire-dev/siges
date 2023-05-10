import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgMaterialInventoryComponent } from './sg-material-inventory.component';

describe('SgMaterialInventoryComponent', () => {
  let component: SgMaterialInventoryComponent;
  let fixture: ComponentFixture<SgMaterialInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgMaterialInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgMaterialInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
