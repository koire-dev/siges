import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgAskPermissionComponent } from './sg-ask-permission.component';

describe('SgAskPermissionComponent', () => {
  let component: SgAskPermissionComponent;
  let fixture: ComponentFixture<SgAskPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgAskPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgAskPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
