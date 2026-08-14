import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf and ngClass in standalone

@Component({
  selector: 'app-collapse-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapse-navbar.html',
  styleUrl: './collapse-navbar.scss',
})
export class CollapseNavbar {
  // Tracks whether the mobile drawer panel is visible
  isNavbarOpen: boolean = false;

  // Tracks which mobile accordion link category is expanded ('home' | 'about' | 'shop' | 'blog' | 'pages')
  activeAccordion: string | null = null;

  /**
   * Toggles the main visibility of the mobile menu panel
   */
  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
    // Automatically collapse open submenus when closing the mobile menu panel
    if (!this.isNavbarOpen) {
      this.activeAccordion = null;
    }
  }

  /**
   * Controls opening and closing behavior of specific submenus
   * @param section Unique identifier key for targeted dropdown matching template links
   */
  toggleAccordion(section: string): void {
    if (this.activeAccordion === section) {
      this.activeAccordion = null; // Toggle off if clicked while already active
    } else {
      this.activeAccordion = section; // Open new targeted block, closing others
    }
  }
}