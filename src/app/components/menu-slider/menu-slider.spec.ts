import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSlider } from './menu-slider';

describe('MenuSlider', () => {
  let component: MenuSlider;
  let fixture: ComponentFixture<MenuSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify dataset array populates correctly', () => {
    expect(component.menuItems).toBeDefined();
    expect(component.menuItems.length).toEqual(7);
    expect(component.menuItems[1].title).toBe('Hamburger');
  });
});