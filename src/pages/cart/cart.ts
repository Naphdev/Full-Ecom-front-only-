import { Component } from '@angular/core';
import { SummerSale } from "../summer-sale/summer-sale";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-cart',
  imports: [SummerSale, Navbar, Footer],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

}
