import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSerieComponent } from './admin-serie.component';

describe('AdminSerieComponent', () => {
  let component: AdminSerieComponent;
  let fixture: ComponentFixture<AdminSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
