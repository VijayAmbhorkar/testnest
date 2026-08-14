import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductItem {
  name: string;
  price: string;
  oldPrice: string;
  image: string;
  discount?: string;
  soldOut?: boolean;
}

@Component({
  selector: 'app-best-selling-res-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-selling-res-slider.html',
  styleUrl: './best-selling-res-slider.scss'
})
export class BestSellingResSlider implements OnInit {

  currentIndex = 0;
  visibleCardsCount = 4;

  products: ProductItem[] = [
    { name: 'Green Broccoli', price: '$8.00', oldPrice: '$9.00', image: '../assets/images/best-selling/brocolli.png', discount: '-11%' },
    { name: 'Purple Onion', price: '$10.00', oldPrice: '$12.00', image: '../assets/images/best-selling/onion.png', discount: '-17%' },
    { name: 'Chile Bell Pepper', price: '$18.00', oldPrice: '', image: '../assets/images/best-selling/chile.png' },
    { name: 'Green Cabbage', price: '$15.00', oldPrice: '', image: '../assets/images/best-selling/cabbage.png' },
    { name: 'Roasted Corn', price: '$15.00', oldPrice: '', image: '../assets/images/best-selling/corn.png' },
    { name: 'Organic Asparagus', price: '$16.00', oldPrice: '$19.00', image: '../assets/images/best-selling/organic.png', discount: '-16%' },
    { name: 'Purple Onion', price: '$18.00', oldPrice: '', image: '../assets/images/best-selling/purple.png', soldOut: true },
    { name: 'Cherry Tomato', price: '$14.00', oldPrice: '', image: '../assets/images/best-selling/cherry.png' },
  ];

  ngOnInit(): void {
    this.updateVisibleCardsCount(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibleCardsCount(event.target.innerWidth);
  }

  updateVisibleCardsCount(width: number) {
    if (width <= 320) {
      this.visibleCardsCount = 1;
    } else if (width <= 911) {
      this.visibleCardsCount = 2;
    } else if (width <= 1024) {
      this.visibleCardsCount = 3;
    } else {
      this.visibleCardsCount = 4;
    }

    if (this.currentIndex > this.products.length - this.visibleCardsCount) {
      this.currentIndex = Math.max(0, this.products.length - this.visibleCardsCount);
    }
  }

  // New logic handling the actual button clicks
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Loop back to end (Optional loop-around logic)
      this.currentIndex = this.products.length - this.visibleCardsCount;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.products.length - this.visibleCardsCount) {
      this.currentIndex++;
    } else {
      // Loop back to start (Optional loop-around logic)
      this.currentIndex = 0;
    }
  }

  getTrackTransform() {
    const percentageShift = this.currentIndex * (100 / this.visibleCardsCount);
    return `translateX(-${percentageShift}%)`;
  }
}