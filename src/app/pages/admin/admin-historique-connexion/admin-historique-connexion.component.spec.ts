import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistoriqueConnexionComponent } from './admin-historique-connexion.component';

describe('AdminHistoriqueConnexionComponent', () => {
  let component: AdminHistoriqueConnexionComponent;
  let fixture: ComponentFixture<AdminHistoriqueConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHistoriqueConnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHistoriqueConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
