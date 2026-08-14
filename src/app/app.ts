import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CollapseNavbar } from "./components/collapse-navbar/collapse-navbar";
// import { MenuSlider } from "./components/menu-slider/menu-slider";
import { Available } from "./components/available/available";
import { ThreeCards } from "./components/three-cards/three-cards";
import { Footer } from "./components/footer/footer";
import { BestSellingSlider } from "./components/best-selling-slider/best-selling-slider";
import { BestSellingResSlider } from "./components/best-selling-res-slider/best-selling-res-slider";
import { FeatureProductsSlider } from "./components/feature-products-slider/feature-products-slider";
import { LatestNews } from "./components/latest-news/latest-news";
import { MenuSlider } from "./components/menu-slider/menu-slider";
// RouterOutlet, MenuSlider
@Component({
  selector: 'app-root',
  imports: [CollapseNavbar, Available, ThreeCards, Footer, BestSellingSlider, BestSellingResSlider, FeatureProductsSlider, LatestNews, MenuSlider],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('teste-nest');
}
