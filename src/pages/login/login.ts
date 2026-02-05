import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { SummerSale } from "../summer-sale/summer-sale";

@Component({
  selector: 'app-login',
  imports: [ Navbar, Footer, SummerSale ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
