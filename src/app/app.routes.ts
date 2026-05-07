import { Routes } from '@angular/router';
import { Signup } from '../pages/signup/signup';
import { Login } from '../pages/login/login';
import { Home } from '../pages/้home/home';
import { Wishlist } from '../pages/wishlist/wishlist';
import { Cart } from '../pages/cart/cart';
import { About } from '../pages/about/about';
import { Account } from '../pages/account/account';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'signup', component: Signup },
    { path: 'login', component: Login },
    { path: 'wishlist', component: Wishlist },
    { path: 'cart', component: Cart },
    { path: 'about', component: About },
    { path: 'account', component: Account },
    
];
