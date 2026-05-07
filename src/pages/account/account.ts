import { Component } from '@angular/core';
import { SummerSale } from "../summer-sale/summer-sale";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-account',
  imports: [SummerSale, Navbar, Footer],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {

}
