import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudynotesTrimestreComponent } from './teacher-studynotes-trimestre.component';

describe('TeacherStudynotesTrimestreComponent', () => {
  let component: TeacherStudynotesTrimestreComponent;
  let fixture: ComponentFixture<TeacherStudynotesTrimestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudynotesTrimestreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherStudynotesTrimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
