import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrandsComponent } from './brands.component';

describe('PrandsComponent', () => {
  let component: PrandsComponent;
  let fixture: ComponentFixture<PrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrandsComponent]
    });
    fixture = TestBed.createComponent(PrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
