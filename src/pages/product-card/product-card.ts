import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  reviewCount?: number;
}

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: Product;
  @Input() variant: 'default' | 'wishlist' | 'flashsale' | 'cart' = 'default';  // Different variants for different contexts
  @Output() addToCart = new EventEmitter<any>();
  @Output() removeFromWishlist = new EventEmitter<any>();
  @Output() addToWishlist = new EventEmitter<any>();
  @Output() discountCalculated = new EventEmitter<number>();

  calculateDiscount(product: any) {
    // Handle different data structures for discount calculation
    if (product.originalPrice && product.price) {
      // Standard product: originalPrice vs price
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    } else if (product.price && product.discountedPrice) {
      // Flash sale product: price vs discountedPrice
      return Math.round(((product.price - product.discountedPrice) / product.price) * 100);
    }
    return 0;
  }
  
  onDiscountCalculated(discount: number) {
    this.discountCalculated.emit(discount);
  }
  


  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  onRemoveFromWishlist() {
    this.removeFromWishlist.emit(this.product);
  }

  onAddToWishlist() {
    this.addToWishlist.emit(this.product);
  }

  getStarsArray(): number[] {
    // Create an array based on the product's rating
    let rating = this.product?.reviewCount || 0;
    
    // Handle invalid rating values
    if (rating === null || rating === undefined || isNaN(rating) || rating < 0) {
      rating = 0;
    }
    
    // Cap rating at 5 stars max
    const starsCount = Math.min(5, Math.max(0, Math.floor(rating)));
    
    // Ensure we return a valid array (handle case where starsCount could be NaN)
    if (isNaN(starsCount) || starsCount < 0) {
      return [];
    }
    
    return Array(starsCount).fill(0);
  }
}