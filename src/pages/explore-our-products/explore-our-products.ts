import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomService } from '../../services/Ecom-service';

@Component({
  selector: 'app-explore-our-products',
  imports: [ CommonModule ],
  templateUrl: './explore-our-products.html',
  styleUrl: './explore-our-products.css',
})
export class ExploreOurProducts {
  exploreOurProducts: any[] = [];
  
  constructor(private ecomService: EcomService) {}
  ngOnInit() {
    this.getExploreOurProducts();
  }

  getExploreOurProducts() {
    this.ecomService.getExploreOurProducts().subscribe({
      next: (response) => {
        if (response.status) {
          this.exploreOurProducts = response.result.products;
        }
      },
      error: (error) => {
        console.error('Error loading explore our products:', error);
      }
    });
  }
}
