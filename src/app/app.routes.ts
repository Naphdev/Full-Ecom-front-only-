import { Routes } from '@angular/router';
import { Signup } from '../pages/signup/signup';
import { Login } from '../pages/login/login';
import { Home } from '../pages/้home/home';
import { Wishlist } from '../pages/wishlist/wishlist';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'signup', component: Signup },
    { path: 'login', component: Login },
    { path: 'wishlist', component: Wishlist },
];
