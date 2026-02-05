
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
                        discount: 25,
                        image: "../../../assets/best-sell/bs1.png",
                        rating: 4.8,
                        reviewCount: 120,
                        category: "Gaming",
                        inStock: true,
                    },
                    {
                        id: 2,
                        name: "Gucci duffle bag",
                        price: 99,
                        originalPrice: 120,
                        image: "../../../assets/best-sell/bs2.png",
                        rating: 4.7,
                        reviewCount: 95,
                        category: "Accessories",
                        inStock: true,
                    },
                    {
                        id: 3,
                        name: "RGB liquid CPU Cooler",
                        price: 320,
                        originalPrice: 400,
                        image: "../../../assets/best-sell/bs3.png",
                        rating: 4.9,
                        reviewCount: 210,
                        category: "Electronics",
                        inStock: true,
                    },
                    {
                        id: 4,
                        name: "Small BookSelf",
                        price: 350,
                        originalPrice: 450,
                        image: "../../../assets/best-sell/bs4.png",
                        rating: 4.6,
                        reviewCount: 78,
                        category: "Furniture",
                        inStock: true,
                    },
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(mockResult);
    }

    getSummerSaleProducts(): Observable<IBaseSingleResult<any>> {
        const mockResult: IBaseSingleResult<any> = {
            result: {
                saleTitle: "Summer Sale - Up to 50% Off",
                saleEndDate: "2026-08-31",
                featuredProducts: [
                    {
                        id: 1,
                        name: "Summer Beach Collection",
                        price: 45,
                        originalPrice: 75,
                        discount: 40,
                        image: "../../../assets/imgs-home/summer1.png",
                        rating: 4.6,
                        category: "Fashion"
                    },
                    {
                        id: 2,
                        name: "Outdoor Camping Gear",
                        price: 120,
                        originalPrice: 200,
                        discount: 40,
                        image: "../../../assets/imgs-home/summer2.png",
                        rating: 4.8,
                        category: "Sports"
                    },
                    {
                        id: 3,
                        name: "Sunscreen SPF 50+",
                        price: 15,
                        originalPrice: 25,
                        discount: 40,
                        image: "../../../assets/imgs-home/summer3.png",
                        rating: 4.4,
                        category: "Beauty"
                    },
                    {
                        id: 4,
                        name: "Swimming Pool Float",
                        price: 25,
                        originalPrice: 40,
                        discount: 38,
                        image: "../../../assets/imgs-home/summer4.png",
                        rating: 4.3,
                        category: "Leisure"
                    }
                ],
                categories: [
                    { name: "Fashion", discount: "Up to 45% off" },
                    { name: "Electronics", discount: "Up to 30% off" },
                    { name: "Home & Garden", discount: "Up to 40% off" },
                    { name: "Beauty", discount: "Up to 35% off" }
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(mockResult);
    }

    getFeaturedCategories(): Observable<IBaseSingleResult<any>> {
        const mockResult: IBaseSingleResult<any> = {
            result: {
                categories: [
                    {
                        id: 1,
                        name: "Smartphones & Tablets",
                        image: "../../../assets/imgs-home/cat1.png",
                        productCount: 120,
                        discount: "Up to 20% off"
                    },
                    {
                        id: 2,
                        name: "Laptop & Computers",
                        image: "../../../assets/imgs-home/cat2.png",
                        productCount: 85,
                        discount: "Up to 15% off"
                    },
                    {
                        id: 3,
                        name: "Gaming Accessories",
                        image: "../../../assets/imgs-home/cat3.png",
                        productCount: 60,
                        discount: "Up to 30% off"
                    },
                    {
                        id: 4,
                        name: "Cameras & Photos",
                        image: "../../../assets/imgs-home/cat4.png",
                        productCount: 45,
                        discount: "Up to 25% off"
                    },
                    {
                        id: 5,
                        name: "Headphones",
                        image: "../../../assets/imgs-home/cat5.png",
                        productCount: 90,
                        discount: "Up to 18% off"
                    },
                    {
                        id: 6,
                        name: "Smart Watches",
                        image: "../../../assets/imgs-home/cat6.png",
                        productCount: 70,
                        discount: "Up to 22% off"
                    }
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
                        category: 'Electronics',
                        isNew: true,
                        inStock: true
                    },
                    {
                        id: 'new2',
                        name: 'Fitness Tracker Watch',
                        price: 59.99,
                        originalPrice: 79.99,
                        image: '../../../assets/imgs-home/new2.png',
                        rating: 4.5,
                        category: 'Wearables',
                        isNew: true,
                        inStock: true
                    },
                    {
                        id: 'new3',
                        name: 'Portable Bluetooth Speaker',
                        price: 45.99,
                        originalPrice: 60,
                        image: '../../../assets/imgs-home/new3.png',
                        rating: 4.4,
                        category: 'Audio',
                        isNew: true,
                        inStock: true
                    },
                    {
                        id: 'new4',
                        name: 'Smart Home Hub',
                        price: 149.99,
                        originalPrice: 199.99,
                        image: '../../../assets/imgs-home/new4.png',
                        rating: 4.8,
                        category: 'Smart Home',
                        isNew: true,
                        inStock: false
                    }
                ]
            },
            status: true,
            status_code: '200'
        };

        return of(mockResult);
    }

    getProducts(): Observable<IBaseSingleResult<any[]>> {
        const mockResults: IBaseSingleResult<any[]> = {
            result: [
                {
                    id: '1',
                    name: 'Product 1',
                    price: 49.99,
                    image: '../../../assets/img/products/product1.jpg',
                    rating: 4.2,
                    category: 'Electronics'
                },
                {
                    id: '2',
                    name: 'Product 2',
                    price: 79.99,
                    image: '../../../assets/img/products/product2.jpg',
                    rating: 4.7,
                    category: 'Home & Garden'
                },
                {
                    id: '3',
                    name: 'Product 3',
                    price: 29.99,
                    image: '../../../assets/img/products/product3.jpg',
                    rating: 4.0,
                    category: 'Clothing'
                }
            ],
            status: true,
            status_code: "200"
        };

        return of(mockResults);
    }

    addToCart(product: any): Observable<IBaseSingleResult<any>> {
        const cartResult: IBaseSingleResult<any> = {
            result: {
                message: 'Product added to cart successfully',
                product: product,
                cartCount: 1
            },
            status: true,
            status_code: "200"
        };

        return of(cartResult);
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
                        products: [{
                            id: '1',
                            name: 'HAVIT HV-G92 Gamepad',
                            price: 160,
                            discountedPrice: 120,
                            image: '../../../assets/imgs-home/fs1.png',
                            rating: 4.5
                        }]
                    },
                    {
                        products: [{
                            id: '2',
                            name: 'AK-900 Wired Keyboard',
                            price: 1160,
                            discountedPrice: 960,
                            image: '../../../assets/imgs-home/fs2.png',
                            rating: 4.2
                        }]
                    },
                    {
                        products: [{
                            id: '3',
                            name: 'IPS LCD Gaming Monitor',
                            price: 400,
                            discountedPrice: 370,
                            image: '../../../assets/imgs-home/fs3.png',
                            rating: 4.7
                        }]
                    },
                    {
                        products: [{
                            id: '4',
                            name: 'S-Series Comfort Chair',
                            price: 400,
                            discountedPrice: 375,
                            image: '../../../assets/imgs-home/fs4.png',
                            rating: 4.0
                        }]
                    },
                    {
                        products: [{
                            id: '5',
                            name: 'HAVIT HV-G92 Gamepad',
                            price: 160,
                            discountedPrice: 120,
                            image: '../../../assets/imgs-home/fs1.png',
                            rating: 4.8
                        }]
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
                        discount: 25,
                        image: '../../../assets/explore-our/eo1.png',
                        rating: 4.7,
                        reviewCount: 156,
                        category: 'Audio',
                        inStock: true,
                    },
                    {
                        id: 'eo2',
                        name: 'Smart Fitness Tracker',
                        price: 59.99,
                        originalPrice: 79.99,
                        discount: 25,
                        image: '../../../assets/explore-our/eo2.png',
                        rating: 4.5,
                        reviewCount: 89,
                        category: 'Wearables',
                        inStock: true,
                    },
                    {
                        id: 'eo3',
                        name: 'Portable Power Bank 20000mAh',
                        price: 39.99,
                        originalPrice: 55,
                        discount: 27,
                        image: '../../../assets/explore-our/eo3.png',
                        rating: 4.6,
                        reviewCount: 203,
                        category: 'Accessories',
                        inStock: true,
                    },
                    {
                        id: 'eo5',
                        name: 'Wireless Charging Pad',
                        price: 29.99,
                        originalPrice: 45,
                        discount: 33,
                        image: '../../../assets/explore-our/eo5.png',
                        rating: 4.4,
                        reviewCount: 124,
                        category: 'Electronics',
                        inStock: true,
                    },
                    {
                        id: 'eo6',
                        name: 'Smart Home Security Camera',
                        price: 129.99,
                        originalPrice: 169.99,
                        discount: 24,
                        image: '../../../assets/explore-our/eo6.png',
                        rating: 4.8,
                        reviewCount: 178,
                        category: 'Smart Home',
                        inStock: true,
                        features: [
                            'Night vision',
                            'Motion detection',
                            'Two-way audio'
                        ]
                    },
                    {
                        id: 'eo7',
                        name: 'Ergonomic Wireless Mouse',
                        price: 24.99,
                        originalPrice: 35,
                        discount: 29,
                        image: '../../../assets/explore-our/eo7.png',
                        rating: 4.3,
                        reviewCount: 92,
                        category: 'Computer Accessories',
                        inStock: true,
                    },
                    {
                        id: 'eo8',
                        name: 'Premium Coffee Maker',
                        price: 149.99,
                        originalPrice: 199.99,
                        discount: 25,
                        image: '../../../assets/explore-our/eo8.png',
                        rating: 4.6,
                        reviewCount: 142,
                        category: 'Home & Kitchen',
                        inStock: true,
                    }
                ]
            },
            status: true,
            status_code: "200"
        };

        return of(mockResult);
    }

}