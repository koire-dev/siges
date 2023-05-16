import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studynotes02Component } from './studynotes02.component';

describe('Studynotes02Component', () => {
  let component: Studynotes02Component;
  let fixture: ComponentFixture<Studynotes02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studynotes02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studynotes02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
