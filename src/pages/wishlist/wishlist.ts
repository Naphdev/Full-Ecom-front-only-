import { Component } from '@angular/core';
import { SummerSale } from "../summer-sale/summer-sale";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-wishlist',
  imports: [SummerSale, Navbar, Footer],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {

}
