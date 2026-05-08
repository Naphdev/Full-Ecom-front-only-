import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { SummerSale } from "../summer-sale/summer-sale";
import { ServiceFeatures } from "../service-features/service-features";

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer, SummerSale, ServiceFeatures],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
