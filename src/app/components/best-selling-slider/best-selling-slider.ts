import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlide, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap/carousel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-best-selling-slider',
  imports: [NgbCarousel, NgbSlide, FormsModule],
  templateUrl: './best-selling-slider.html',
  styleUrl: './best-selling-slider.scss',
  providers: [NgbCarouselConfig]
})
export class BestSellingSlider {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  // Added exclamation mark (!) to clear any strict-check syntax bugs
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
    config.wrap = true;           // Explicitly allows loop back to slide 1
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}