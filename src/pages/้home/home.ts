import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { SummerSale } from "../summer-sale/summer-sale";
import { Homepage } from "../homepage/homepage";
import { FlashSales } from "../flash-sales/flash-sales";
import { BrowseByCategory } from "../browse-by-category/browse-by-category";
import { BestSellingProducts } from "../best-selling-products/best-selling-products";
import { ExploreOurProducts } from "../explore-our-products/explore-our-products";
import { NewArrival } from "../new-arrival/new-arrival";
import { Footer } from "../footer/footer";


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        Navbar,
        SummerSale,
        Homepage,
        FlashSales,
        BrowseByCategory,
        BestSellingProducts,
        ExploreOurProducts,
        NewArrival,
        Footer
    ],
    template: `
        <app-summer-sale></app-summer-sale>
        <app-navbar></app-navbar>
        <app-homepage></app-homepage>
        <app-flash-sales></app-flash-sales>
        <app-browse-by-category></app-browse-by-category>
        <app-best-selling-products></app-best-selling-products>
        <app-explore-our-products></app-explore-our-products>
        <app-new-arrival></app-new-arrival>
        <app-footer></app-footer>
  `,
    styles: []
})
export class Home {

}