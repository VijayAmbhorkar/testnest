import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingSlider } from './best-selling-slider';

describe('BestSellingSlider', () => {
  let component: BestSellingSlider;
  let fixture: ComponentFixture<BestSellingSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(BestSellingSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
