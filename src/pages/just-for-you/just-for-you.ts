import { Component } from '@angular/core';
import { EcomService } from '../../services/Ecom-service';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-just-for-you',
  imports: [CommonModule, ProductCard],
  templateUrl: './just-for-you.html',
  styleUrl: './just-for-you.css',
})
export class JustForYou {
  productsForYou: any[] = [];

  constructor(private ecomService: EcomService) { }
  ngOnInit() { this.getProductsForYou(); }

  onAddToCart(product: any) {
    console.log('Add to cart clicked', product);
    // Add actual cart functionality here
  }

  onAddToWishlist(product: any) {
    console.log('Add to wishlist clicked', product);
    // Add actual wishlist functionality here
  }

     getProductsForYou() {
        this.ecomService.getProductsForYou().subscribe({
          next: (response) => {
            if (response.status) {
              this.productsForYou = response.result.products;
            }
          },
          error: (error) => {
            console.error('Error loading products for you:', error);
          }
        });
      }
}
