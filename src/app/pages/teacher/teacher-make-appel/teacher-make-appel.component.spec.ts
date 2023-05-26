import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMakeAppelComponent } from './teacher-make-appel.component';

describe('TeacherMakeAppelComponent', () => {
  let component: TeacherMakeAppelComponent;
  let fixture: ComponentFixture<TeacherMakeAppelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherMakeAppelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherMakeAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
