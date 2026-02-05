import { Component } from '@angular/core';
import { EcomService } from '../../services/Ecom-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-selling-products',
  imports: [ CommonModule ],
  templateUrl: './best-selling-products.html',
  styleUrl: './best-selling-products.css',
})
export class BestSellingProducts {
  bestSellingProducts: any[] = [];
  
  constructor(private ecomService: EcomService) { }
  
  ngOnInit() {
    this.getBestSellingProducts();
  }

  getBestSellingProducts() {
    this.ecomService.getBestSellingProducts().subscribe({
      next: (response) => {
        if (response.status) {
          this.bestSellingProducts = response.result.products;
        }
      },
      error: (error) => {
        console.error('Error loading best selling products:', error);
      }
    });
  }
}
