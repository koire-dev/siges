import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgListAskPermissionComponent } from './sg-list-ask-permission.component';

describe('SgListAskPermissionComponent', () => {
  let component: SgListAskPermissionComponent;
  let fixture: ComponentFixture<SgListAskPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgListAskPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgListAskPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
