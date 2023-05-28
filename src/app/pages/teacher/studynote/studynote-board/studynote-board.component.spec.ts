import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudynoteBoardComponent } from './studynote-board.component';

describe('StudynoteBoardComponent', () => {
  let component: StudynoteBoardComponent;
  let fixture: ComponentFixture<StudynoteBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudynoteBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudynoteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
