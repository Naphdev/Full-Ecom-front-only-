import { Component } from '@angular/core';
import { SummerSale } from "../summer-sale/summer-sale";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { EcomService } from '../../services/Ecom-service';
import { CommonModule } from '@angular/common';
import { JustForYou } from "../just-for-you/just-for-you";
import { Product, ProductCard } from "../product-card/product-card";
import Swal from 'sweetalert2';



@Component({
  selector: 'app-wishlist',
  imports: [SummerSale, Navbar, Footer, CommonModule, JustForYou, ProductCard],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {

  wishlistProducts: any[] = [];
  productsForYou: any[] = [];

  constructor(private ecomService: EcomService) { }

  ngOnInit() {
    this.getWishlistProducts();
    this.getProductsForYou();
  }

  getWishlistProducts() {
    this.ecomService.getWishlist().subscribe({
      next: (response) => {
        if (response.status) {
          this.wishlistProducts = response.result.wishlist;
        }
      },
      error: (error) => {
        console.error('Error loading wishlist products:', error);
      }
    });
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

  onAddToCart(product: any) {
    console.log('Add to cart clicked', product);
    // Add actual cart functionality here
  }

  onRemoveFromWishlist(product: Product) {
    console.log('Remove from wishlist clicked', product);
    // Remove product from wishlist
    this.wishlistProducts = this.wishlistProducts.filter(p => p.id !== product.id);
  }

  moveAllToBag() {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to move all items to the bag?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, move them to the bag!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.wishlistProducts.forEach(p => this.onAddToCart(p));

        this.wishlistProducts = [];


        Swal.fire({
          title: "Moved to cart!",
          text: "Your items have been moved to cart.",
          icon: "success"
        });
      }
    });
  }



}
