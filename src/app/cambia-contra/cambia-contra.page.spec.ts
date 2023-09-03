import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiaContraPage } from './cambia-contra.page';

describe('CambiaContraPage', () => {
  let component: CambiaContraPage;
  let fixture: ComponentFixture<CambiaContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambiaContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
