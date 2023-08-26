import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesPage } from './acces.page';

describe('AccesPage', () => {
  let component: AccesPage;
  let fixture: ComponentFixture<AccesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
