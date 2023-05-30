import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudynotesSequenceComponent } from './teacher-studynotes-sequence.component';

describe('TeacherStudynotesSequenceComponent', () => {
  let component: TeacherStudynotesSequenceComponent;
  let fixture: ComponentFixture<TeacherStudynotesSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStudynotesSequenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherStudynotesSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
