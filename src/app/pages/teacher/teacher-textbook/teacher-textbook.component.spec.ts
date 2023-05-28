import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTextbookComponent } from './teacher-textbook.component';

describe('TeacherTextbookComponent', () => {
  let component: TeacherTextbookComponent;
  let fixture: ComponentFixture<TeacherTextbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTextbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherTextbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
