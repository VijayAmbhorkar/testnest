import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingResSlider } from './best-selling-res-slider';

describe('BestSellingResSlider', () => {
  let component: BestSellingResSlider;
  let fixture: ComponentFixture<BestSellingResSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingResSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(BestSellingResSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
