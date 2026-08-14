import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsArticle {
  title: string;
  author: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.html',
  styleUrl: './latest-news.scss',
})
export class LatestNews implements OnInit {
  currentStep: number = 1;
  progressWidth: number = 0;

  newsArticles: NewsArticle[] = [
    {
      title: '12 Healthy Fruits and Vegetables Must-Haves to Stock Your Fridge',
      author: 'Admin',
      date: '16th Nov 2024',
      image: '/assets/images/latest-news/healthy.png'
    },
    {
      title: 'Great bulk recipes to help use all your organic vegetables',
      author: 'Admin',
      date: '16th Nov 2024',
      image: '/assets/images/latest-news/roll.png'
    },
    {
      title: 'Great bulk recipes to help use all your organic vegetables',
      author: 'Admin',
      date: '16th Nov 2024',
      image: '/assets/images/latest-news/tomato.png'
    },
    {
      title: 'Great bulk recipes to help use all your organic vegetables',
      author: 'Admin',
      date: '16th Nov 2024',
      image: '/assets/images/latest-news/apple.png'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.calculateProgress();
  }

  calculateProgress() {
    const totalItems = this.newsArticles.length;
    this.progressWidth = (this.currentStep / totalItems) * 100;
  }

  nextSlide() {
    const firstItem = this.newsArticles.shift();
    if (firstItem) {
      this.newsArticles.push(firstItem);
      this.newsArticles = [...this.newsArticles];
      this.currentStep = this.currentStep >= this.newsArticles.length ? 1 : this.currentStep + 1;
      this.calculateProgress();
    }
  }

  prevSlide() {
    const lastItem = this.newsArticles.pop();
    if (lastItem) {
      this.newsArticles.unshift(lastItem);
      this.newsArticles = [...this.newsArticles];
      this.currentStep = this.currentStep <= 1 ? this.newsArticles.length : this.currentStep - 1;
      this.calculateProgress();
    }
  }
}