
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";

// Define the missing interface
interface IBaseSingleResult<T> {
    result: T;
    status: boolean;
    status_code: string;
}
@Injectable({
    providedIn: "root",
})

export class EcomService {
    constructor(private http: HttpClient) {
    }

    getBestSellingProducts(): Observable<IBaseSingleResult<any>> {
        const mockResult: IBaseSingleResult<any> = {
            result: {
                products: [
                    {
                        id: 1,
                        name: "The north coat",
                        price: 120,
                        originalPrice: 160,
                        image: "../../../assets/best-sell/bs1.png",
                        rating: 4.8,
                        reviewCount: 120,
                    },
                    {
                        id: 2,
                        name: "Gucci duffle bag",
                        price: 99,
                        originalPrice: 120,
                        image: "../../../assets/best-sell/bs2.png",
                        rating: 4.7,
                        reviewCount: 95,
                    },
                    {
                        id: 3,
                        name: "RGB liquid CPU Cooler",
                        price: 320,
                        originalPrice: 400,
                        image: "../../../assets/best-sell/bs3.png",
                        rating: 4.9,
                        reviewCount: 210,
                    },
                    {
                        id: 4,
                        name: "Small BookSelf",
                        price: 350,
                        originalPrice: 450,
                        image: "../../../assets/best-sell/bs4.png",
                        rating: 4.6,
                        reviewCount: 78,
                    },
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(mockResult);
    }


    getProductDetails(productId: string): Observable<IBaseSingleResult<any>> {
        // Return mock data
        const mockResult: IBaseSingleResult<any> =
        {
            result: {
                id: productId,
                name: 'Sample Product',
                description: 'This is a sample product description',
                price: 99.99,
                category: 'Electronics',
                image: '../../../assets/img/products/sample-product.jpg',
                rating: 4.5,
                inStock: true,
                features: [
                    'High quality material',
                    'Durable construction',
                    'Easy to use',
                    'Warranty included'
                ],
                reviews: [
                    {
                        id: 1,
                        userName: 'John Doe',
                        rating: 5,
                        comment: 'Great product, highly recommended!',
                        date: '2026-01-15'
                    },
                    {
                        id: 2,
                        userName: 'Jane Smith',
                        rating: 4,
                        comment: 'Good value for money',
                        date: '2026-01-10'
                    }
                ],
                relatedProducts: [
                    { id: '2', name: 'Related Product 1', price: 89.99 },
                    { id: '3', name: 'Related Product 2', price: 109.99 },
                    { id: '4', name: 'Related Product 3', price: 79.99 }
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(mockResult);
    }

    getNewArrivals(): Observable<IBaseSingleResult<any>> {
        const mockResult: IBaseSingleResult<any> = {
            result: {
                products: [
                    {
                        id: 'new1',
                        name: 'Wireless Earbuds Pro',
                        price: 89.99,
                        originalPrice: 120,
                        image: '../../../assets/new-arrival/new1.png',
                        rating: 4.7,
                        reviewCount: 156
                    },
                    {
                        id: 'new2',
                        name: 'Fitness Tracker Watch',
                        price: 59.99,
                        originalPrice: 79.99,
                        image: '../../../assets/imgs-home/new2.png',
                        rating: 4.5,
                        reviewCount: 156
                    },
                    {
                        id: 'new3',
                        name: 'Portable Bluetooth Speaker',
                        price: 45.99,
                        originalPrice: 60,
                        image: '../../../assets/imgs-home/new3.png',
                        rating: 4.4,
                        reviewCount: 156
                    },
                    {
                        id: 'new4',
                        name: 'Smart Home Hub',
                        price: 149.99,
                        originalPrice: 199.99,
                        image: '../../../assets/imgs-home/new4.png',
                        rating: 4.8,
                        reviewCount: 156
                    }
                ]
            },
            status: true,
            status_code: '200'
        };

        return of(mockResult);
    }

    getUserProfile(): Observable<IBaseSingleResult<any>> {
        const mockResult: IBaseSingleResult<any> = {
            result: {
                id: 'user-12345',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '+1 (555) 123-4567',
                address: {
                    street: '123 Main Street',
                    city: 'New York',
                    state: 'NY',
                    zipCode: '10001',
                    country: 'United States'
                },
                ordersCount: 24,
                wishlistCount: 8,
                rewardPoints: 1250,
                membershipLevel: 'Gold',
                lastOrderDate: '2026-01-28',
                avatar: '../../../assets/imgs-home/user-avatar.png'
            },
            status: true,
            status_code: '200'
        };

        return of(mockResult);
    }

    getFlashSalesDetail(): Observable<IBaseSingleResult<any>> {
        const flashSalesResult: IBaseSingleResult<any> = {
            result: {
                flashSalesData: [
                    {
                            id: '1',
                            name: 'HAVIT HV-G92 Gamepad',
                            price: 160,
                            originalPrice: 120,
                            image: '../../../assets/imgs-home/fs1.png',
                            rating: 4.5,
                            reviewCount: 156
                    },
                    {
                            id: '2',
                            name: 'AK-900 Wired Keyboard',
                            price: 1160,
                            originalPrice: 960,
                            image: '../../../assets/imgs-home/fs2.png',
                            rating: 4.2,
                            reviewCount: 156
                    },
                    {
                            id: '3',
                            name: 'IPS LCD Gaming Monitor',
                            price: 400,
                            originalPrice: 370,
                            image: '../../../assets/imgs-home/fs3.png',
                            rating: 4.7,
                            reviewCount: 156
                    },
                    {
                            id: '4',
                            name: 'S-Series Comfort Chair',
                            price: 400,
                            originalPrice: 375,
                            image: '../../../assets/imgs-home/fs4.png',
                            rating: 4.0,
                            reviewCount: 156
                    },
                    {
                            id: '5',
                            name: 'HAVIT HV-G92 Gamepad',
                            price: 160,
                            originalPrice: 120,
                            image: '../../../assets/imgs-home/fs1.png',
                            rating: 4.8,
                            reviewCount: 156
                    }
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(flashSalesResult);
    }

    getExploreOurProducts(): Observable<IBaseSingleResult<any>> {
        const mockResult: IBaseSingleResult<any> = {
            result: {
                products: [
                    {
                        id: 'eo1',
                        name: 'Wireless Bluetooth Headphones',
                        price: 89.99,
                        originalPrice: 120,
                        image: '../../../assets/explore-our/eo1.png',
                        rating: 4.7,
                        reviewCount: 156,
                    },
                    {
                        id: 'eo2',
                        name: 'Smart Fitness Tracker',
                        price: 59.99,
                        originalPrice: 79.99,
                        image: '../../../assets/explore-our/eo2.png',
                        rating: 4.5,
                        reviewCount: 89,
                    },
                    {
                        id: 'eo3',
                        name: 'Portable Power Bank 20000mAh',
                        price: 39.99,
                        originalPrice: 55,
                        image: '../../../assets/explore-our/eo3.png',
                        rating: 4.6,
                        reviewCount: 203,
                    },
                    {
                        id: 'eo5',
                        name: 'Wireless Charging Pad',
                        price: 29.99,
                        originalPrice: 45,
                        image: '../../../assets/explore-our/eo5.png',
                        rating: 4.4,
                        reviewCount: 124,
                    },
                    {
                        id: 'eo6',
                        name: 'Smart Home Security Camera',
                        price: 129.99,
                        originalPrice: 169.99,
                        image: '../../../assets/explore-our/eo6.png',
                        rating: 4.8,
                        reviewCount: 178,
                    },
                    {
                        id: 'eo7',
                        name: 'Ergonomic Wireless Mouse',
                        price: 24.99,
                        originalPrice: 35,
                        image: '../../../assets/explore-our/eo7.png',
                        rating: 4.3,
                        reviewCount: 92,
                    },
                    {
                        id: 'eo8',
                        name: 'Premium Coffee Maker',
                        price: 149.99,
                        originalPrice: 199.99,
                        image: '../../../assets/explore-our/eo8.png',
                        rating: 4.6,
                        reviewCount: 142,
                    }
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(mockResult);
    }
    getWishlist(): Observable<IBaseSingleResult<any>> {
        const mockResult: IBaseSingleResult<any> = {
            result: {
                wishlist: [
                    {
                        id: '1',
                        name: 'Gucci duffle bag',
                        price: 960,
                        originalPrice: 1200,
                        image: '../../../assets/wishlist/wl1.png',
                        rating: 4.5,
                        reviewCount: 120
                    },
                    {
                        id: '2',
                        name: 'RGB liquid CPU Cooler',
                        price: 1960,
                        originalPrice: 2200,
                        image: '../../../assets/wishlist/wl2.png',
                        rating: 4.7,
                        reviewCount: 150
                    },
                    {
                        id: '3',
                        name: 'GP11 Shooter USB Gamepad',
                        originalPrice: 600,
                        price: 550,
                        image: '../../../assets/wishlist/wl3.png',
                        rating: 4.9,
                        reviewCount: 180
                    },
                    {
                        id: '4',
                        name: 'Product Quilted Satin Jacket',
                        originalPrice: 1000,
                        price: 760,
                        image: '../../../assets/wishlist/wl4.png',
                        rating: 4.2,
                        reviewCount: 200
                    }
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(mockResult);
    }

    getProductsForYou(): Observable<IBaseSingleResult<any>> {
        const mockResult: IBaseSingleResult<any> = {
            result: {
                products: [
                    {
                        id: '1',
                        name: 'Gucci duffle bag',
                        price: 960,
                        originalPrice: 1200,
                        image: '../../../assets/just-for-you/jf1.png',
                        rating: 4.5,
                        reviewCount: 120
                    },
                    {
                        id: '2',
                        name: 'RGB liquid CPU Cooler',
                        price: 1960,
                        originalPrice: 2200,
                        image: '../../../assets/just-for-you/jf2.png',
                        rating: 4.7,
                        reviewCount: 150
                    },
                    {
                        id: '3',
                        name: 'GP11 Shooter USB Gamepad',
                        price: 550,
                        originalPrice: 600,
                        image: '../../../assets/just-for-you/jf3.png',
                        rating: 4.9,
                        reviewCount: 180
                    },
                    {
                        id: '4',
                        name: 'Product Quilted Satin Jacket',
                        price: 760,
                        originalPrice: 1000,
                        image: '../../../assets/just-for-you/jf4.png',
                        rating: 4.2,
                        reviewCount: 200
                    }
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(mockResult);  
    }

}