import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViceSidebarComponent } from './principal-vice-sidebar.component';

describe('PrincipalViceSidebarComponent', () => {
  let component: PrincipalViceSidebarComponent;
  let fixture: ComponentFixture<PrincipalViceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalViceSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalViceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
