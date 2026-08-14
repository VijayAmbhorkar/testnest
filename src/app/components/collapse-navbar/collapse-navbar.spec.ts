import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseNavbar } from './collapse-navbar';

describe('CollapseNavbar', () => {
  let component: CollapseNavbar;
  let fixture: ComponentFixture<CollapseNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseNavbar], // Kept as import for Standalone pattern
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the CollapseNavbar component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should structural parameters default initialization values to closed/false states', () => {
    expect(component.isNavbarOpen).toBe(false); // Fixed: changed from toBeFalse()
    expect(component.activeAccordion).toBeNull();
  });

  it('should change isNavbarOpen condition when toggleNavbar method fires', () => {
    component.toggleNavbar();
    expect(component.isNavbarOpen).toBe(true); // Fixed: changed from toBeTrue()

    component.toggleNavbar();
    expect(component.isNavbarOpen).toBe(false); // Fixed: changed from toBeFalse()
  });

  it('should assign active status key on running accordion toggle logic', () => {
    component.toggleAccordion('home');
    expect(component.activeAccordion).toEqual('home');

    // Clicking active group a second time closes it out
    component.toggleAccordion('home');
    expect(component.activeAccordion).toBeNull();
  });
});