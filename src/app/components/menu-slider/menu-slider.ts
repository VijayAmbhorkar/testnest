import { Component, OnInit, HostListener } from '@angular/core';

interface MenuItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-menu-slider',
  standalone: true,
  imports: [],
  templateUrl: './menu-slider.html',
  styleUrl: './menu-slider.scss',
})
export class MenuSlider implements OnInit {
  originalItems: MenuItem[] = [
    { title: 'Beef', description: 'More than 40 different types of food.', image: '/assets/images/our-menu-slider/beef-one.png' },
    { title: 'Hamburger', description: 'More than 40 different types of food.', image: '/assets/images/our-menu-slider/burger.png' },
    { title: 'Apple Pie', description: 'A classic American dish.', image: '/assets/images/our-menu-slider/apple.png' },
    { title: 'Buffalo Wings', description: 'Discover our menu and order delivery.', image: '/assets/images/our-menu-slider/buffalo.png' },
    { title: 'Macaroni and Cheese', description: 'A creamy, comforting dish made from cooked.', image: '/assets/images/our-menu-slider/macaroni.png' },
    { title: 'Beef', description: 'Discover our menu and order delivery.', image: '/assets/images/our-menu-slider/beef.png' },
    { title: 'Salmon', description: 'Get the freshest salmon and ocean trout.', image: '/assets/images/our-menu-slider/salmon.png' }
  ];

  displayItems: MenuItem[] = [];
  currentIndex: number = 7;
  readonly bufferCount = 7;
  isTransitioning: boolean = false;
  disableAnimation: boolean = false;

  // Exact requirement configurations
  itemsPerView: number = 7;

  ngOnInit() {
    this.updateItemsPerView();
    this.setupInfiniteItems();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateItemsPerView();
  }

  updateItemsPerView() {
    const width = window.innerWidth;
    if (width >= 1200) {
      this.itemsPerView = 7;
    } else if (width >= 1024) {
      this.itemsPerView = 5;
    } else if (width >= 768) {
      this.itemsPerView = 4;
    } else if (width >= 576) {
      this.itemsPerView = 3;
    } else {
      this.itemsPerView = 2; // Above 320px up to 767px
    }
  }

  setupInfiniteItems() {
    const total = this.originalItems.length;
    if (total === 0) return;

    const startClones = [];
    for (let i = total - this.bufferCount; i < total; i++) {
      startClones.push(this.originalItems[(i + total) % total]);
    }

    const endClones = [];
    for (let i = 0; i < this.bufferCount; i++) {
      endClones.push(this.originalItems[i % total]);
    }

    this.displayItems = [...startClones, ...this.originalItems, ...endClones];
    this.currentIndex = this.bufferCount;
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex++;
  }

  prevSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex--;
  }

  onTransitionEnd() {
    this.isTransitioning = false;
    const totalOriginal = this.originalItems.length;

    // Smooth Infinite Loop Logic for both directions
    if (this.currentIndex >= totalOriginal + this.bufferCount) {
      this.disableAnimation = true;
      this.currentIndex = this.bufferCount;
      setTimeout(() => this.disableAnimation = false, 20);
    } else if (this.currentIndex < this.bufferCount) {
      this.disableAnimation = true;
      this.currentIndex = totalOriginal + this.currentIndex;
      setTimeout(() => this.disableAnimation = false, 20);
    }
  }
}