import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductItem {
  name: string;
  price: string;
  oldPrice: string;
  image: string;
  discount?: string;
  soldOut?: boolean;
  countdownTo?: string;
  empty?: string;
  timer?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

@Component({
  selector: 'app-feature-products-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-products-slider.html',
  styleUrl: './feature-products-slider.scss',
})
export class FeatureProductsSlider implements OnInit, OnDestroy {
  private timerIntervalId: any;

  // Loader state variables
  currentStep: number = 1; 
  progressWidth: number = 0;

  products: ProductItem[] = [
    { name: 'Kiwi New Zealand', price: '$33.00', oldPrice: '', image: '../assets/images/feature-products/kiwi.png', empty: 'true' },
    {
      name: 'Organic Diced Peaches',
      price: '$11.00',
      oldPrice: '$12.50',
      image: '../assets/images/feature-products/organic.png',
      discount: '-12%',
      countdownTo: '2026-06-20T18:00:00'
    },
    {
      name: 'Orange Valencia Organic',
      price: '$13.00',
      oldPrice: '$15.00',
      image: '../assets/images/feature-products/orange.png',
      discount: '-13%',
      countdownTo: '2026-12-09T00:00:00'
    },
    {
      name: 'Fresh Blueberry',
      price: '$15.00',
      oldPrice: '$19.00',
      image: '../assets/images/feature-products/fresh.png',
      discount: '-13%',
      countdownTo: '2026-07-15T00:00:00'
    },
    { name: 'Yellow Lemon Organic', price: '$18.00', oldPrice: '', image: '../assets/images/feature-products/yellow.png', empty: 'true' },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startCountdowns();
    this.calculateProgress(); // First load computation
  }

  ngOnDestroy() {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }
  }

  startCountdowns() {
    this.updateTimers();
    this.timerIntervalId = setInterval(() => {
      this.updateTimers();
    }, 1000);
  }

  updateTimers() {
    const now = new Date().getTime();

    this.products.forEach(product => {
      if (product.countdownTo) {
        const target = new Date(product.countdownTo).getTime();
        const difference = target - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          product.timer = {
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0')
          };
        } else {
          product.timer = { days: '00', hours: '00', minutes: '00', seconds: '00' };
        }
      }
    });

    this.cdr.detectChanges();
  }

  // Loader calculation function based on total items
  calculateProgress() {
    const totalItems = this.products.length;
    this.progressWidth = (this.currentStep / totalItems) * 100;
  }

  nextSlide() {
    const firstItem = this.products.shift();
    if (firstItem) {
      this.products.push(firstItem);
      this.products = [...this.products];

      // Advance step loader track counter
      this.currentStep = this.currentStep >= this.products.length ? 1 : this.currentStep + 1;
      this.calculateProgress();
    }
  }

  prevSlide() {
    const lastItem = this.products.pop();
    if (lastItem) {
      this.products.unshift(lastItem);
      this.products = [...this.products];

      // Decrease step loader track counter
      this.currentStep = this.currentStep <= 1 ? this.products.length : this.currentStep - 1;
      this.calculateProgress();
    }
  }
}