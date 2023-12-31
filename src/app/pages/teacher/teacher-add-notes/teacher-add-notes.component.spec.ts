import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddNotesComponent } from './teacher-add-notes.component';

describe('TeacherAddNotesComponent', () => {
  let component: TeacherAddNotesComponent;
  let fixture: ComponentFixture<TeacherAddNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
