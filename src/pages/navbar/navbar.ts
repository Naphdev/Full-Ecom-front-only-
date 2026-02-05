import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule
  ],

  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  ismenuopen = signal(false);
  
  constructor(private router: Router) {}
  
  togglemenu() {
    this.ismenuopen.set(!this.ismenuopen());
  }
  
  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }

  isActiveRoute(route: string) {
    return this.router.url === route;
  }

  navigateToWishlist() {
    this.router.navigate(['/wishlist']);
  }
  
}
