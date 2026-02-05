import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { SummerSale } from "../summer-sale/summer-sale";

@Component({
  selector: 'app-signup',
  imports: [Navbar, Footer, SummerSale],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private router: Router) {}
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
