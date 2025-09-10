import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header{
  isMenuOpen = false;
  isScrolled = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth > 768) {
      this.closeMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const navContainer = document.querySelector('.nav-container');
    const menuToggle = document.querySelector('.menu-toggle');

    // Check if the click is outside the nav container and not on the menu toggle button itself
    if (this.isMenuOpen && navContainer && menuToggle && !navContainer.contains(event.target as Node) && !menuToggle.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

}