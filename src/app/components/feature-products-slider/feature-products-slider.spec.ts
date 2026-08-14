import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductsSlider } from './feature-products-slider';

describe('FeatureProductsSlider', () => {
  let component: FeatureProductsSlider;
  let fixture: ComponentFixture<FeatureProductsSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureProductsSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureProductsSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
