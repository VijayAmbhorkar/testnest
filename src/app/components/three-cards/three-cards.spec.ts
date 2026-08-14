import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCards } from './three-cards';

describe('ThreeCards', () => {
  let component: ThreeCards;
  let fixture: ComponentFixture<ThreeCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeCards],
    }).compileComponents();

    fixture = TestBed.createComponent(ThreeCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
