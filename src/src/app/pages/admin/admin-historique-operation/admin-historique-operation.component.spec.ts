import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistoriqueOperationComponent } from './admin-historique-operation.component';

describe('AdminHistoriqueOperationComponent', () => {
  let component: AdminHistoriqueOperationComponent;
  let fixture: ComponentFixture<AdminHistoriqueOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHistoriqueOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHistoriqueOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
