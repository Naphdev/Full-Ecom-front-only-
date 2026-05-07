import { Component } from '@angular/core';
import { SummerSale } from "../summer-sale/summer-sale";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer"
import { CommonModule } from '@angular/common';
import { ServiceFeatures } from "../service-features/service-features";

@Component({
  selector: 'app-about',
  imports: [SummerSale, Navbar, Footer, CommonModule, ServiceFeatures],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // SVG icon definitions
  private svgIcons: { [key: string]: string[] } = {
    delivery: [
      'M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z'
    ],
    sale: [
      'M10.75 10.818v2.614A3.13    3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z',
      'M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z'
    ],
    customer: [
      'M14 6a2.5 2.5 0 0 0-4-3 2.5 2.5 0 0 0-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6V6h1.5v3h6C17.44 9 18 8.44 18 7.75v-.5C18 6.56 17.44 6 16.75 6H14Zm-1-1.5a1 1 0 0 1-1 1h-1v-1a1 1 0 1 1 2 0Zm-6 0a1 1 0 0 0 1 1h1v-1a1 1 0 0 0-2 0Z',
      'M9.25 10.5H3v4.75A2.75 2.75 0 0 0 5.75 18h3.5v-7.5ZM10.75 18v-7.5H17v4.75A2.75 2.75 0 0 1 14.25 18h-3.5Z'
    ],
    annual: [
      'M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm6.25 3.75a.75.75 0 0 0-1.5 0v.272c-.418.024-.831.069-1.238.132-.962.15-1.807.882-1.95 1.928-.04.3-.062.607-.062.918 0 1.044.83 1.759 1.708 1.898l1.542.243v2.334a11.214 11.214 0 0 1-2.297-.392.75.75 0 0 0-.405 1.444c.867.243 1.772.397 2.702.451v.272a.75.75 0 0 0 1.5 0v-.272c.419-.024.832-.069 1.239-.132.961-.15 1.807-.882 1.95-1.928.04-.3.061-.607.061-.918 0-1.044-.83-1.759-1.708-1.898L10.75 9.86V7.525c.792.052 1.56.185 2.297.392a.75.75 0 0 0 .406-1.444 12.723 12.723 0 0 0-2.703-.451V5.75ZM8.244 7.636c.33-.052.666-.09 1.006-.111v2.097l-1.308-.206C7.635 9.367 7.5 9.156 7.5 9c0-.243.017-.482.049-.716.042-.309.305-.587.695-.648Zm2.506 5.84v-2.098l1.308.206c.307.049.442.26.442.416 0 .243-.016.482-.048.716-.042.309-.306.587-.695.648-.331.052-.667.09-1.007.111Z'
    ]
  };

  items = [
    {
      id: 1,
      title: 'Free delivery for all orders over $140',
      value: '10.5k',
      icon: 'delivery'
    },
    {
      id: 2,
      title: 'Monthly Product Sale',
      value: '33k',
      icon: 'sale'
    },
    {
      id: 3,
      title: 'Customer active in our site',
      value: '45.5k',
      icon: 'customer'
    },
    {
      id: 4,
      title: 'Annual gross sale in our site',
      value: '25k',
      icon: 'annual'
    }
  ];

  people = [
    {
      image: '../../assets/about-person-contact/Tom.png',
      name: 'Emma Watson',
      title: 'Founder & Chairman',
    },
    {
      image: '../../assets/about-person-contact/Emma.png',
      name: 'Emma Watson',
      title: 'Managing Director',
    },
    {
      image: '../../assets/about-person-contact/Will-Smith.png',
      name: 'Will Smith',
      title: 'Product Designer',
    }
  ];

  // Method to get SVG paths by icon name
  getSvgPaths(iconName: string): string[] {
    return this.svgIcons[iconName] || [];
  }
}
