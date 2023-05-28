import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgListSanctionComponent } from './sg-list-sanction.component';

describe('SgListSanctionComponent', () => {
  let component: SgListSanctionComponent;
  let fixture: ComponentFixture<SgListSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgListSanctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgListSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
