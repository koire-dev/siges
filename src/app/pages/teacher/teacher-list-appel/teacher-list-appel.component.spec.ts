import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListAppelComponent } from './teacher-list-appel.component';

describe('TeacherListAppelComponent', () => {
  let component: TeacherListAppelComponent;
  let fixture: ComponentFixture<TeacherListAppelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListAppelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherListAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
