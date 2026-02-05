import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EcomService } from '../../services/Ecom-service';

@Component({
  selector: 'app-flash-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-sales.html',
  styleUrl: './flash-sales.css',
})
export class FlashSales implements OnInit {
  
  // Countdown timer variables
  days: number = 3;
  hours: number = 23;
  minutes: number = 19;
  seconds: number = 56;
  
  // Flash sales products data
  flashSalesProducts: any[] = [];
  
  constructor(private ecomService: EcomService) {}


  ngOnInit() {
    this.startCountdownTimer();
    this.loadFlashSalesData();
  }
  
  loadFlashSalesData() {
    this.ecomService.getFlashSalesDetail().subscribe({
      next: (response) => {
        if (response.status) {
          this.flashSalesProducts = response.result.flashSalesData;
        }
      },
      error: (error) => {
        console.error('Error loading flash sales data:', error);
      }
    });
  }
  
  calculateDiscount(product: any): number {
    if (!product || !product.price || !product.discountedPrice) return 0;
    const discount = ((product.price - product.discountedPrice) / product.price) * 100;
    return Math.round(discount);
  }
  
  renderStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('full');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }

  startCountdownTimer() {
    // Simulate the countdown decreasing
    const countdownInterval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.seconds = 59;
        if (this.minutes > 0) {
          this.minutes--;
        } else {
          this.minutes = 59;
          if (this.hours > 0) {
            this.hours--;
          } else {
            this.hours = 23;
            if (this.days > 0) {
              this.days--;
            } else {
              // Countdown finished
              clearInterval(countdownInterval);
            }
          }
        }
      }
    }, 1000);
  }
}
