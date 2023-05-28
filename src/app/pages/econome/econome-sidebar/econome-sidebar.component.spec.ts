import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomeSidebarComponent } from './econome-sidebar.component';

describe('EconomeSidebarComponent', () => {
  let component: EconomeSidebarComponent;
  let fixture: ComponentFixture<EconomeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomeSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
